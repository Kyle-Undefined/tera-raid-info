import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const response = JSON.parse(
	readFileSync(join(__dirname, 'fixtures/garchomp.json'), 'utf8')
);
const api = 'https://graphqlpokemon.favware.tech/v8';
let requests: number;
test.beforeEach(async ({ page }) => {
	requests = 0;
	await page.route(api, async (route) => {
		requests++;
		await route.fulfill({ json: response });
	});
});
async function choose(page: import('@playwright/test').Page) {
	await page.goto('./');
	await page.getByLabel('Pokémon', { exact: true }).selectOption('Garchomp');
	await expect(page.locator('#pokemon-name')).toHaveText('Garchomp');
}
test('homepage is prompt only, with usable selectors and no overflow', async ({
	page,
}) => {
	await page.goto('./');
	await expect(
		page.getByRole('heading', { name: 'Choose your raid' })
	).toBeVisible();
	await expect(page.getByLabel('Raid tier')).toHaveValue('6');
	await expect(page.getByLabel('Region', { exact: true })).toHaveValue(
		'Paldea'
	);
	await expect(page.getByRole('button', { name: 'Share raid' })).toBeDisabled();
	await expect(page.locator('#pokemonContent')).toHaveCount(0);
	expect(requests).toBe(0);
	expect(
		await page
			.locator('header img')
			.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)
	).toBe(true);
	const tierBox = await page.getByLabel('Raid tier').boundingBox();
	const pokemonBox = await page
		.getByLabel('Pokémon', { exact: true })
		.boundingBox();
	if (page.viewportSize()!.width <= 520)
		expect(pokemonBox!.y).toBeGreaterThan(tierBox!.y);
	else expect(pokemonBox!.y).toBe(tierBox!.y);
	expect(
		await page.evaluate(
			() => document.documentElement.scrollWidth <= innerWidth
		)
	).toBe(true);
});
test('selected raid has real data and working normal and shiny artwork', async ({
	page,
}) => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	await choose(page);
	await expect(page.locator('#pokemonStats')).toContainText('108');
	await expect(page.locator('#pokemonTypes')).toContainText('Dragon');
	await expect(page.locator('#pokemonAbility')).toContainText('Rough Skin (H)');
	await expect(page.locator('#pokemonMoves')).toContainText('Earthquake');
	for (const image of await page.locator('#pokemon img').all())
		expect(
			await image.evaluate(
				(img: HTMLImageElement) => img.complete && img.naturalWidth > 0
			)
		).toBe(true);
	expect(requests).toBe(1);
	expect(
		await page
			.locator('#pokemonHerbs img')
			.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)
	).toBe(true);
	await expect(page.locator('#pokemonTypeAdvantages')).toContainText(
		'Electric · 2×'
	);
	expect(errors).toEqual([]);
	expect(
		await page.evaluate(
			() => document.documentElement.scrollWidth <= innerWidth
		)
	).toBe(true);
});
test('details stay pinned and artwork stays anchored when either panel expands', async ({
	page,
}) => {
	await choose(page);
	const art = page.locator('.tri-art-column');
	const before = await art.boundingBox();
	const beforeScroll = await page.evaluate(() => scrollY);
	const ability = page.getByRole('button', { name: 'Sand Veil', exact: true });
	await ability.click();
	await page.mouse.move(0, 0);
	await expect(ability).toHaveAttribute('aria-pressed', 'true');
	await expect(page.locator('#ability-detail')).toBeVisible();
	const move = page.getByRole('button', { name: 'Earthquake', exact: true });
	await move.click();
	await page.mouse.move(0, 0);
	await expect(page.locator('#move-detail')).toContainText('Power 100');
	const after = await art.boundingBox();
	expect(after!.y + (await page.evaluate(() => scrollY))).toBe(
		before!.y + beforeScroll
	);
	expect(after?.height).toBe(before?.height);
	await move.press('Escape');
	await expect(page.locator('#move-detail')).toHaveCount(0);
	await page.getByRole('button', { name: 'Close ability details' }).click();
	await expect(page.locator('#ability-detail')).toHaveCount(0);
});
test('keyboard focus and pointer hover preview details without pinning', async ({
	page,
}, testInfo) => {
	await choose(page);
	const move = page.getByRole('button', { name: 'Earthquake', exact: true });
	await move.press('Shift+Tab');
	await page.keyboard.press('Tab');
	await expect(page.locator('#move-detail')).toBeVisible();
	await expect(move).toHaveAttribute('aria-pressed', 'false');
	await page.getByRole('button', { name: 'Home', exact: true }).focus();
	await expect(page.locator('#move-detail')).toHaveCount(0);
	if (
		testInfo.project.name === 'desktop' ||
		testInfo.project.name === 'firefox'
	) {
		await move.hover();
		await expect(page.locator('#move-detail')).toBeVisible();
		await page.mouse.move(0, 0);
		await expect(page.locator('#move-detail')).toHaveCount(0);
	}
});
test('actions read left to right then down and can be collapsed', async ({
	page,
}) => {
	await choose(page);
	const actions = page.locator('.tri-action');
	const thresholds = await page.locator('.tri-threshold').allTextContents();
	expect(thresholds.indexOf('60% Time')).toBeLessThan(
		thresholds.indexOf('50% HP')
	);
	const boxes = await Promise.all(
		(await actions.all()).map((action) => action.boundingBox())
	);
	for (let i = 1; i < boxes.length; i++) {
		const previous = boxes[i - 1]!;
		const current = boxes[i]!;
		expect(current.y >= previous.y).toBe(true);
		if (current.y === previous.y) expect(current.x > previous.x).toBe(true);
	}
	await page.locator('#pokemonActions summary').click();
	await expect(actions.first()).toBeHidden();
	await page.locator('#pokemonActions summary').click();
	await expect(actions.first()).toBeVisible();
});
test('changing Tera types updates matchups without a second request', async ({
	page,
}) => {
	await choose(page);
	await page.getByLabel('Tera type', { exact: true }).selectOption('Fairy');
	await expect(page.locator('#pokemonTeraWeaknesses')).toContainText(
		'Poison · 2×'
	);
	await expect(page.locator('#pokemonTeraWeaknesses')).toContainText('Immune');
	await expect(page.locator('#pokemonTeraWeaknesses')).toContainText('Dragon');
	expect(requests).toBe(1);
});
test('shared links survive the GitHub Pages 404 redirect and restore all choices', async ({
	page,
}) => {
	await page.goto('6/Paldea/Garchomp/Fairy');
	await expect(page.locator('#pokemon-name')).toHaveText('Garchomp');
	await expect(page.getByLabel('Tera type', { exact: true })).toHaveValue(
		'Fairy'
	);
	await expect(page.getByLabel('Pokémon', { exact: true })).toHaveValue(
		'Garchomp'
	);
	expect(new URL(page.url()).pathname).toBe(
		'/tera-raid-info/6/Paldea/Garchomp/Fairy'
	);
});
test('changing tier or region clears the previous raid and Home returns to the prompt', async ({
	page,
}) => {
	await choose(page);
	await page.getByLabel('Region', { exact: true }).selectOption('Kitakami');
	await expect(
		page.getByRole('heading', { name: 'Choose your raid' })
	).toBeVisible();
	await expect(page.locator('#pokemonContent')).toHaveCount(0);
	await page.getByLabel('Region', { exact: true }).selectOption('Paldea');
	await page.getByLabel('Pokémon', { exact: true }).selectOption('Garchomp');
	await page.getByLabel('Raid tier').selectOption('5');
	await expect(page.locator('#pokemonContent')).toHaveCount(0);
	await page.getByLabel('Pokémon', { exact: true }).selectOption('Garchomp');
	await expect(page.locator('#pokemon-name')).toHaveText('Garchomp');
	await page.getByRole('button', { name: 'Home', exact: true }).click();
	await expect(
		page.getByRole('heading', { name: 'Choose your raid' })
	).toBeVisible();
});
test('failed requests show a retry which can recover', async ({ page }) => {
	await page.unroute(api);
	await page.route(api, (route) => route.abort());
	await page.goto('./');
	await page.getByLabel('Pokémon', { exact: true }).selectOption('Garchomp');
	await expect(page.getByRole('alert')).toContainText('Could not load');
	await page.unroute(api);
	await page.route(api, (route) => route.fulfill({ json: response }));
	await page.getByRole('button', { name: 'Try again' }).click();
	await expect(page.locator('#pokemon-name')).toHaveText('Garchomp');
});

for (const detail of [
	{ name: 'Sand Veil', section: 'pokemonAbility', panel: 'ability-detail' },
	{ name: 'Earthquake', section: 'pokemonMoves', panel: 'move-detail' },
]) {
	test(`${detail.name} details open without closing and reopening`, async ({
		page,
	}, testInfo) => {
		await choose(page);
		await page.evaluate(({ section, panel }) => {
			const changes: string[] = [];
			(window as unknown as { detailChanges: string[] }).detailChanges =
				changes;
			new MutationObserver((records) => {
				for (const record of records) {
					for (const node of record.addedNodes)
						if (node instanceof Element && node.id === panel)
							changes.push('opened');
					for (const node of record.removedNodes)
						if (node instanceof Element && node.id === panel)
							changes.push('closed');
				}
			}).observe(document.getElementById(section)!, {
				childList: true,
				subtree: true,
			});
		}, detail);
		const button = page.getByRole('button', { name: detail.name, exact: true });
		if (testInfo.project.use.hasTouch) {
			await button.dispatchEvent('pointerenter', { pointerType: 'touch' });
			await expect(page.locator(`#${detail.panel}`)).toHaveCount(0, {
				timeout: 500,
			});
			await button.tap();
		} else await button.click();
		await expect(button).toHaveAttribute('aria-pressed', 'true');
		await expect(page.locator(`#${detail.panel}`)).toBeVisible();
		expect(
			await page.evaluate(
				() => (window as unknown as { detailChanges: string[] }).detailChanges
			)
		).toEqual(['opened']);
	});
}

test('detail buttons keep their position while pressed', async ({ page }) => {
	await choose(page);
	for (const name of ['Sand Veil', 'Earthquake']) {
		const button = page.getByRole('button', { name, exact: true });
		await button.hover();
		const before = await button.boundingBox();
		const beforeScroll = await page.evaluate(() => scrollY);
		await page.mouse.down();
		await page.evaluate(
			() =>
				new Promise<void>((resolve) =>
					requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
				)
		);
		const pressed = await button.boundingBox();
		expect(pressed!.y + (await page.evaluate(() => scrollY))).toBe(
			before!.y + beforeScroll
		);
		expect(pressed!.x).toBe(before!.x);
		await page.mouse.up();
	}
});
