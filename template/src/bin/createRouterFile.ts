import { writeFileSync } from "fs";
import { exec } from "child_process";
import { join } from "path";



async function getRepoName() {
	return await new Promise<string | null>(resolve => {
		exec("git remote get-url origin", (err, data) => {
			if (err !== null) {
				resolve(null);
				return;
			}
			const splitData = data.split("/");

			resolve(splitData[splitData.length - 1].replace("\n", ""));
		})
	})
};



export async function createRouterFile() {

	const repoName = await getRepoName();

	writeFileSync(join(__dirname, "..", "router.ts"),
		`
import {createRouter, defineRoute} from "type-route";
import {makeThisModuleAnExecutableRouteLister} from "github-pages-plugin-for-type-route";


export const routeDefs = {
	"home": defineRoute("/${repoName ?? ""}"),
	"pageExample": defineRoute("/page-example"),
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const {RouteProvider, routes, useRoute} = createRouter(
	routeDefs
);

	`
	);


}