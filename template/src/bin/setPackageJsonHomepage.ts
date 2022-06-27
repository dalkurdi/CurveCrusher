import { writeFileSync } from "fs";
import { execSync } from "child_process";
import { join } from "path";


function getHomepage() {
	const [r, u] = (
		execSync("git remote get-url origin"))
		.toString()
		.replace(/\n/g, "")
		.replace(".git", "")
		.replace(/:/g, "/")
		.replace(/\r?\n$/, "")
		.split("/")
		.reverse();

	return "https://" + u + ".github.io/" + r;
}

function writeHomepageToPackageJson() {

	writeFileSync(
		"package.json",
		JSON.stringify({
			...require(join(__dirname, "..", "..", "package.json")),
			"homepage": getHomepage()
		}, null, 2)
	)

}

writeHomepageToPackageJson();