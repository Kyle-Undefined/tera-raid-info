import { defineConfig } from '@playwright/test';
export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	forbidOnly: !!process.env['CI'],
	retries: process.env['CI'] ? 1 : 0,
	workers: process.env['CI'] ? 2 : 4,
	reporter: 'list',
	use: {
		baseURL: 'http://127.0.0.1:4173/tera-raid-info/',
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
	},
	webServer: {
		command: 'node e2e/serve.cjs',
		url: 'http://127.0.0.1:4173/tera-raid-info/',
		reuseExistingServer: !process.env['CI'],
	},
	projects: [
		{
			name: 'desktop',
			use: { browserName: 'chromium', viewport: { width: 1440, height: 1000 } },
		},
		{
			name: 'tablet',
			use: {
				browserName: 'chromium',
				viewport: { width: 820, height: 1180 },
				hasTouch: true,
			},
		},
		{
			name: 'mobile',
			use: {
				browserName: 'chromium',
				viewport: { width: 390, height: 844 },
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: 'firefox',
			use: { browserName: 'firefox', viewport: { width: 1440, height: 1000 } },
		},
		{
			name: 'webkit',
			use: {
				browserName: 'webkit',
				viewport: { width: 390, height: 844 },
				isMobile: true,
				hasTouch: true,
			},
		},
	],
});
