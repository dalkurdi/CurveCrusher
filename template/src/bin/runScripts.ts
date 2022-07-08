import { createRouterFile } from "./createRouterFile";
import { clean } from "./clean";
import { writeHomepageToPackageJson } from "./setPackageJsonHomepage";

(async () => {
	await writeHomepageToPackageJson();
	await createRouterFile();
	clean();
})();