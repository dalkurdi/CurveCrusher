import { GlProjectCard } from "../../GlCards/GlProjectCard";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "../getStory";
import ExampleImgUrl from "../assets/img/thumbnail1.png";

const { getStory, meta } = getStoryFactory({
    sectionName,
    "wrappedComponent": {
        GlProjectCard,
    },
    "defaultWidth": 500,
});

export default meta;

export const Vue = getStory({
    "badgeLabel": "Badge Label",
    "title": "Title",
    "subtitle": "SubTitle",
    "projectImageUrl": ExampleImgUrl,
    "text": "22/10/2021",
});
