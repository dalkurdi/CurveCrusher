import { memo } from "react";
import { GlArticle } from "gitlanding/GlArticle";
import { GlProjectCard } from "gitlanding/GlCards/GlProjectCard";
import { GlCheckList } from "gitlanding/GlCheckList";
import { GlSlider } from "gitlanding/GlSlider";
import { GlReviewSlide } from "gitlanding/GlReviewSlide";
import { GlCards } from "gitlanding/GlCards";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";




export const PageExample = memo(() => {

	return <>

			<GlArticle
				title="Article title"
				body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                    nisl nec **hendrerit** rutrum, 
                    mi enim semper arcu, ut imperdiet urna libero non metus. 
                    Donec imperdiet ac nulla sit amet lacinia. 
                    Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
                    Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.`}
				buttonLabel="Article Button label"
				buttonLink={{
					"href": "https://example.com",
				}}
				illustration={{
					"type": "image",
					"src": "https://user-images.githubusercontent.com/39378411/135731816-5ba39459-d95e-413d-b515-92a7b0dc5acf.png",
					"hasShadow": false
				}}
				hasAnimation={true}
			/>

			<GlCards>
				<>
					<GlProjectCard
						title="Project Card Title"
						subtitle="Project Card Subtitle"
						projectImageUrl="https://user-images.githubusercontent.com/39378411/135731821-0f1c7165-fada-418f-896a-c36a0e55171b.png"
					/>
					<GlProjectCard
						title="Project Card Title"
						subtitle="Project Card Subtitle"
						projectImageUrl="https://user-images.githubusercontent.com/39378411/135731810-93193eba-ada5-460a-96ad-948215278850.png"
					/>
					<GlProjectCard
						title="Project Card Title"
						subtitle="Project Card Subtitle"
						projectImageUrl="https://user-images.githubusercontent.com/39378411/135731819-1cf18697-e946-449f-ad6e-be414e341c40.png"
					/>
					<GlProjectCard
						title="Project Card Title"
						subtitle="Project Card Subtitle"
						projectImageUrl="https://user-images.githubusercontent.com/39378411/135731914-0265b77e-3338-4747-b014-e845f16332a7.png"
					/>
				</>
			</GlCards>

			<GlSectionDivider />

			<GlCheckList
				heading="Check List Heading"
				hasAnimation={true}
				elements={[
					{
						"title": "List element title",
						"description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut **imperdiet** urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
					},
					{
						"title": "List element title",
						"description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
					},
					{
						"title": "List element title",
						"description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
					},
					{
						"title": "List element title",
						"description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
					},
					{
						"title": "List element title",
						"description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
					},
					{
						"title": "List element title",
						"description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
					},
				]}
			/>

			<GlSectionDivider />

			<GlSlider
				title="Review slider title"
				autoPlayTimeInterval={4}
				slides={[
					<GlReviewSlide
						logoUrl="https://user-images.githubusercontent.com/39378411/135731994-29a3c46a-0d92-4ec8-954e-39bfeeb06534.png"
						descriptionMd={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                            nisl nec hendrerit rutrum, 
                            mi enim semper arcu, ut imperdiet urna libero non metus. 
                            Donec imperdiet ac nulla sit amet lacinia. 
                            Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
                            Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.`}
						signature="Signature"
					/>,
					<GlReviewSlide
						logoUrl="https://user-images.githubusercontent.com/39378411/135731995-136d4baf-58a6-4cb3-a72c-b8ddce835b3c.png"
						descriptionMd={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                            nisl nec hendrerit rutrum, 
                            mi enim semper arcu, ut imperdiet urna libero non metus. 
                            Donec imperdiet ac nulla sit amet lacinia. 
                            Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
                            Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.`}
						signature="Signature"
					/>,
					<GlReviewSlide
						logoUrl="https://user-images.githubusercontent.com/39378411/135731999-a2d8f901-3d7d-40a9-b59f-102ee1facc45.png"
						descriptionMd={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                            nisl nec hendrerit rutrum, 
                            mi enim semper arcu, ut imperdiet urna libero non metus. 
                            Donec imperdiet ac nulla sit amet lacinia. 
                            Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
                            Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.`}
						signature="Signature"
					/>,
				]}
			/>
	</>
})