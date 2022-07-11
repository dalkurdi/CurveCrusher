import { createRouterFile } from "./createRouterFile";
import { clean } from "./clean";
import { setPackageJsonHomepage } from "./setPackageJsonHomepage";

(async () => {
	await setPackageJsonHomepage();
	await createRouterFile();
	clean();
})();