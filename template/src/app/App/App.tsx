import { GlTemplate } from "gitlanding/GlTemplate";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useRoute } from "../router";
import { Home } from "../pages/Home";
import { PageExample } from "../pages/PageExample";
import { FourOhFour } from "../pages/FourOFour";
import { ThemeProvider } from "../theme";

export function App() {
	const route = useRoute();
	return (
		<ThemeProvider>
			<GlTemplate
				header={<Header />}
				headerOptions={{
					"position": "sticky",
					"isRetracted": "smart",
				}}
				footer={<Footer />}
			>
				{route.name === "home" && <Home />}
				{route.name === "pageExample" && <PageExample />}
				{route.name === false && <FourOhFour />}

			</GlTemplate >

		</ThemeProvider>
	);
}