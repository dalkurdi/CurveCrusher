import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";


export function createCi() {
	const branchName = execSync("git branch --show-current").toString().replace("\n", "");
	const path = join(__dirname, "..", "..", ".github", "workflows");
	mkdirSync(path, {"recursive": true });

	writeFileSync(join(path, "deploy.yml"), 
`on:
  push:
    branches:
      - ${branchName}

jobs:

  deploy_on_gh_pages:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2.1.3
      with:
        node-version: '16'
    - uses: bahmutov/npm-install@v1
    - run: yarn build
    - run: git remote set-url origin https://git:\${GITHUB_TOKEN}@github.com/\${{github.repository}}.git
      env:
        GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
    - run: npx -y -p gh-pages@3.1.0 gh-pages -d build --add -u "github-actions-bot <actions@github.com>"`)

};