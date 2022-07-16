import { createRouterFile } from "./createRouterFile";
import { clean } from "./clean";
import { setPackageJsonHomepage } from "./setPackageJsonHomepage";
import { createCi } from "./createCi";

(async () => {
	await setPackageJsonHomepage();
	await createRouterFile();
	createCi();
	clean();
})();