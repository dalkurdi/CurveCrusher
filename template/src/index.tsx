import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlFooter } from "gitlanding/GlFooter";
import { GlHeader } from "gitlanding/GlHeader";
import { useRoute, routes, RouteProvider } from "./router";
import { Home } from "./pages/Home";
import { PageExample } from "./pages/PageExample";


function App() {
    const route = useRoute();
    return (
        <GlTemplate
            header={
                <GlHeader
                    title={<a {...routes.home().link}><h1>Header Title</h1></a>}
                    links={[
                        {
                            "label": "Page Example",
                            ...routes.pageExample().link
                        },
                        {
                            "label": "link 1",
                            "href": "https://example.com",
                        },
                        {
                            "label": "link 2",
                            "href": "https://example.com",
                        },
                    ]}
                    enableDarkModeSwitch={true}
                    githubRepoUrl="https://github.com/torvalds/linux"
                    githubButtonSize="large"
                />
            }
            headerOptions={{
                "position": "sticky",
                "isRetracted": "smart",
            }}
            footer={
                <GlFooter
                    bottomDivContent="Licence M I T"
                    email="email@email.com"
                    phoneNumber="+33545345676"
                    links={[
                        {
                            ...routes.pageExample().link,
                            "label": "Example Page",
                        },
                        {
                            "href": "https://example.com",
                            "label": "link 1",
                        },
                        {
                            "href": "https://example.com",
                            "label": "link 2",
                        },
                    ]}
                />
            }
        >
            {route.name === "home" && <Home />}
            {route.name === "pageExample" && <PageExample />}

        </GlTemplate >
    );
}


createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouteProvider>
            <App />
        </RouteProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
