import { GlSectionArticle } from "../../GlSection/GlSectionArticle";
import { getStoryFactory } from "../getStory";
import { sectionName } from "./sectionName";

const { getStory, meta } = getStoryFactory({
    sectionName,
    "wrappedComponent": { GlSectionArticle },
});

export default meta;

export const Vue = getStory({
    "articleTitle": "Lorem Ipsum",
    "articleParagraphMd": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nulla tempor consectetur mauris nec pharetra. 
Aliquam a vulputate nibh. Etiam magna tortor, 
congue vel faucibus ut, aliquam sit amet augue. 
Aenean ac sem non lacus consectetur laoreet. 
Curabitur vulputate, diam ut pulvinar rhoncus, 
purus risus tincidunt ligula, vitae efficitur 
quam enim in magna. Suspendisse potenti. 
Maecenas hendrerit diam mauris, 
sed finibus lectus posuere sit amet.`,

    "articleButtonLabel": "Lorem Ipsum",
});
