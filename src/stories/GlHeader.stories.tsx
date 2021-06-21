import { GlHeader } from "../GlHeader/GlHeader";
import type { GlHeaderProps } from "../GlHeader/GlHeader";
import { getStoryFactory } from "./getStory";
import { css } from "tss-react";

const { getStory, meta } = getStoryFactory({
    "wrappedComponent": { GlHeader },
});

export default meta;

/* spell-checker: disable */
const props: GlHeaderProps = {
    "title": {
        "type": "text",
        "text": `Espace documentaire du **SSP Cloud**`,
    },
    "menuItems": [
        {
            "name": "Documentation",
            "link": { "href": "#" },
        },
        {
            "name": "Le datalab",
            "link": { "href": "#" },
        },
        {
            "name": "Contribuer",
            "link": { "href": "#" },
        },
        {
            "name": "Actualités et projets",
            "link": { "href": "#" },
        },
    ],
};
/* spell-checker: enabled */

export const largeScreen = getStory({
    ...props,
    "className": css({
        "width": 1600,
    }),
});
