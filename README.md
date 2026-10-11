<h1 align="center">Tera Raid Info</h1>
<p align="center">Aggregate view of the <a href="https://www.serebii.net/" target="_blank">Serebii</a> Tera Raid Info for Pokémon Scarlet & Violet.<br/><br/>First attempt at a project written in Angular and Typescript.</p>

<p align="center">
<a href="https://github.com/kyle-undefined/tera-raid-info/actions/workflows/gh-pages.yml" target="_blank"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/kyle-undefined/tera-raid-info/gh-pages.yml?style=for-the-badge" /></a>
<a href="https://coveralls.io/github/Kyle-Undefined/tera-raid-info" target="_blank"><img alt="Coveralls" src="https://img.shields.io/coverallsCoverage/github/Kyle-Undefined/tera-raid-info?style=for-the-badge"></a>
<a href="https://github.com/Kyle-Undefined/tera-raid-info/commits/main" target="_blank"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/kyle-undefined/tera-raid-info?color=lightblue&style=for-the-badge" /></a>
<a href="https://github.com/Kyle-Undefined/tera-raid-info/blob/main/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/kyle-undefined/tera-raid-info?color=00a0c1&style=for-the-badge" /></a>
<br>
<a href="https://kyleundefined.dev/tera-raid-info/" target="_blank"><img alt="View on GitHub Pages" src="https://img.shields.io/badge/Github%20Pages-00578E?style=for-the-badge&logo=github" /></a>
</p>

## Features

<details open>
<summary>5 & 6 Star Raids</summary>
<br>
Compiled the data for the <a href="https://www.serebii.net/scarletviolet/teraraidbattles/5star.shtml" target="_blank">5 Star</a> and <a href="https://www.serebii.net/scarletviolet/teraraidbattles/6star.shtml" target="_blank">6 Star</a> raids from Serebii. Shows only the raids for the selected tier.
</details>

<details>
<summary>Pokémon Type(s)</summary>
<br>
Shows the Type(s) of the selected Pokémon. Useful for knowing which moves are STAB since Tera Type doesn't remove it.
</details>

<details>
<summary>Pokémon Image</summary>
<br>
Shows the normal and shiny images for the selected Pokémon side by side. Just incase you get lucky with a ⭐️shiny⭐️ raid.
</details>

<details>
<summary>Base Stats</summary>
<br>
Helpful to know if the Pokémon is a Physical or Special attacker, or how tanky it is. Great for knowing what protecting move your support Pokémon should have. For example, Reflect for Physical attackers.
</details>

<details>
<summary>Abilities</summary>
<br>
Shows each ability the Pokémon can have for the raid, and if it's their Hidden Ability* it will be marked with (H). Hovering over the Ability will display the information about it, and if you're on mobile clicking it will work.
<br><br>

> *Note: For 5 Star raids, Pokémon appear to not have their Hidden Ability, with some exceptions (Ditto). For 6 Star raids, Pokémon can have their Hidden Ability. This is based on the data from Serebii. If it's wrong, let me know.

</details>

<details>
<summary>Moves</summary>
<br>

Shows the move set of the raid Pokémon. Each move is color coded to the Type it is, with Status moves always showing last in the list. Hovering over (or clicking) the move will display the information for it, like the Base Power, if it's a Physical/Special/Status, Description and more. If the move is a Physical or Special attack, then it will display the Type advantages of the move Type.

</details>

<details>
<summary>Herba Mystica Drops</summary>
<br>

Shows all the Herba Mystica the raid Pokémon can drop, along with the chance of getting it. Useful for hunting certain Herba Mystica for sandwiches.

</details>

<details>
<summary>Type Advantages / Weaknesses</summary>
<br>

<b>Advantages:</b>
Shows all of the Type advantages from the move set the raid Pokémon has that are non Status moves. Only shows Super Effective advantages.
<br><br>
<b>Weaknesses:</b>
When a Tera Type is selected, shows all of the Type matchups for the selected Type, including its resistances and immunities.
<br><br>
If the raid Pokémon move set includes the Tera Blast move, then the Super Effective advantages of that Tera Type are shown. Useful for going up against the Eevee-lutions and other Pokémon with the move.

</details>


<details>
<summary>Raid Sharing</summary>
<br>

You can share the raid choices with others, by simply clicking the Share raid button in the header and it will automatically copy to your clipboard. This will set the Raid Tier, Pokémon and Tera Type to auto load for others who click the link. For example, <a href="https://kyle-undefined.github.io/tera-raid-info/6/Paldea/Garchomp/Fairy" target="_blank">6 Star Fairy Garchomp</a>.

</details>


## Contributors
- <a href="https://github.com/thatmatthallett" target="_blank">CronikCRS</a>

## Built With
<p>
<a href="https://www.npmjs.com/package/@angular/cli" target="_blank"><img alt="Angular Version" src="https://img.shields.io/github/package-json/dependency-version/kyle-undefined/tera-raid-info/dev/@angular/cli/main?color=37474f&label=Angular&logo=angular&style=for-the-badge" /></a>
<a href="https://www.npmjs.com/package/typescript" target="_blank"><img alt="Typescript Version" src="https://img.shields.io/github/package-json/dependency-version/kyle-undefined/tera-raid-info/dev/typescript/main?color=3178c6&label=Typescript&logo=typescript&logoColor=white&style=for-the-badge" /></a>
<a href="https://nodejs.org/en/" target="_blank"><img alt="Node.js Version" src="https://img.shields.io/badge/Node-24.21.0-74ae62?style=for-the-badge&logo=node.js&logoColor=white" /></a>
<a href="https://www.npmjs.com/package/npm" target="_blank"><img alt="NPM Version" src="https://img.shields.io/badge/NPM-11.19.0-cc3838?style=for-the-badge&logo=npm&logoColor=white" /></a>
<a href="https://github.com/favware/graphql-pokemon" target="_blank"><img alt="@favware/graphql-pokemon" src="https://img.shields.io/github/package-json/dependency-version/kyle-undefined/tera-raid-info/dev/@favware/graphql-pokemon/main?color=4623d5&label=@favware/graphql-pokemon&logo=graphql&style=for-the-badge" /></a>
</p>

## Development

Use Node **24.21.0** (the current Node 24 LTS release) and npm **11.19.0**. The Node version is recorded in `.node-version` and `.nvmrc`.

```sh
git clone https://github.com/Kyle-Undefined/tera-raid-info.git
cd tera-raid-info
nvm install
npm install --global npm@11.19.0
npm ci
npm run dev
```

The homepage starts with the selectors and a “Choose your raid” prompt. Selecting a Pokémon loads its raid details. Hover or focus an ability or move to inspect it; click or tap to keep its details open. Close or Escape dismisses the details. Artwork stays anchored, and raid actions read left to right, then down, by descending remaining percentage. Time and HP thresholds are independent triggers. Raid actions can be collapsed.

```sh
npm run lint
npm run typecheck
npm run test:coverage
npm run build:prod
npx --no-install playwright install --with-deps chromium firefox webkit
npm run test:e2e
```

Browser tests serve the production build at `/tera-raid-info/` and check Chromium desktop, tablet and mobile, Firefox, and WebKit. API responses are intercepted with a recorded fixture so CI does not depend on the public GraphQL service being available. Shared links use `/tera-raid-info/<tier>/<region>/<pokemon>/<tera>` and the existing GitHub Pages 404 redirect.

## Manual dependency updates

Renovate is explicitly disabled in `renovate.json`. Direct dependencies use exact versions, `.npmrc` keeps new installs exact, and `package-lock.json` locks the full dependency tree. No automated update PRs are configured. The disablement takes effect when this configuration reaches the default branch.

Review `npm outdated` and `npm audit`, then install selected versions with `npm install --save-exact <package>@<version>` (add `--save-dev` for development tools). Keep Angular packages aligned and check [Angular's compatibility table](https://angular.dev/reference/versions) before upgrading Node or TypeScript. Angular 22 requires TypeScript 6.0, so TypeScript 7 is deliberately deferred. After updates, run all checks above and commit both manifests. Review npm's install-script allowlist when transitive packages change.

The workflow validates pull requests and `codex/**` branches with read-only repository permissions. Only a successful push to `main` can deploy the validated artifact; pull requests cannot deploy. Actions are pinned to commit SHAs and need manual updates too.

## Disclaimer
This is an unofficial, non-commercial, fan-made app and is NOT affiliated, endorsed or supported by Nintendo, Game Freak and The Pokémon Company in any way. Many images used in this app are copyrighted and are supported under fair use. Pokémon and Pokémon character names are trademarks of Nintendo. No copyright infringement intended.
