import React from 'react';
import reportWebVitals from 'reportWebVitals';
import { createRoot } from "react-dom/client";
import { GlTemplate } from "gitlanding/GlTemplate";
import { useRoute, RouteProvider } from "./router";
import { Home } from "./pages/Home";
import { PageExample } from "./pages/PageExample";
import { Header } from "./App/Header";
import { Footer } from "./App/Footer";


function App() {
    const route = useRoute();
    return (
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