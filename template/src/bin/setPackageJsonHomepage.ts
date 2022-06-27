import { writeFileSync } from "fs";
import { exec } from "child_process";
import { join } from "path";

function getUrl(){

	return new Promise<string | undefined>(resolve => {
		exec("git remote get-url origin", (err, url) => {
			if (err !== null) {
				console.log("This git repository does not have a remote origin !");
				resolve(undefined);
				return;
			}

			resolve(url);

		});
	});
}

async function getHomepage() {
	const url = await getUrl();
	if(url === undefined){
		return;
	}
	const [r, u] = 
		url
		.toString()
		.replace(/\n/g, "")
		.replace(".git", "")
		.replace(/:/g, "/")
		.replace(/\r?\n$/, "")
		.split("/")
		.reverse();

	return "https://" + u + ".github.io/" + r;
}

async function writeHomepageToPackageJson() {
	const homepage = await getHomepage();

	if(homepage === undefined){
		return;
	}

	writeFileSync(
		"package.json",
		JSON.stringify({
			...require(join(__dirname, "..", "..", "package.json")),
			"homepage": homepage
		}, null, 2)
	)

}

writeHomepageToPackageJson();