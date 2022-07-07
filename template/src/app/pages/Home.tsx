import { memo } from "react";
import { GlHero } from "gitlanding/GlHero/GlHero";
import { GlArticle } from "gitlanding/GlArticle";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import { declareComponentKeys, useTranslation } from "i18n";

export const Home = memo(() => {
	const { t } = useTranslation({ Home });
	return (
		<>
			<GlHero
				title={t("heroTitle")}
				subTitle={t("heroSubtitle")}
				illustration={{
					"type": "image",
					"src": "https://user-images.githubusercontent.com/39378411/135731749-4a723d4e-52ea-49b7-83c1-7da4db8f3f59.png",
					"hasShadow": false
				}}
				hasLinkToSectionBellow={true}
			/>

			<GlArticle
				title={t("articleTitle")}
				body={t("articleBody")}
				buttonLabel={t("articleButtonLabel")}
				buttonLink={{
					"href": "https://example.com",
				}}
				illustration={{
					"type": "image",
					"src": "https://user-images.githubusercontent.com/39378411/135731808-6cf3e4dd-1047-4a0a-95be-65fdd6947315.png",
					"hasShadow": false
				}}
				hasAnimation={true}
				illustrationPosition="left"
			/>

			<GlCards>
				{
					<>
						<GlLogoCard
							title={t("card1Title")}
							paragraph={t("card1Paragraph")}
							buttonLabel="Button Label"
							iconUrls={[
								"https://user-images.githubusercontent.com/39378411/135731999-a2d8f901-3d7d-40a9-b59f-102ee1facc45.png",
								"https://user-images.githubusercontent.com/39378411/135731995-136d4baf-58a6-4cb3-a72c-b8ddce835b3c.png",
							]}
						/>
						<GlLogoCard
							title={t("card2Title")}
							paragraph={t("card2Paragraph")}
							buttonLabel="Button Label"
							iconUrls={[
								"https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png",
							]}
						/>

						<GlLogoCard
							title={t("card3Title")}
							paragraph={t("card3Paragraph")}
							buttonLabel="Button Label"
							iconUrls={[
								"https://user-images.githubusercontent.com/39378411/135731991-3da13e97-c2f7-42b2-88ab-055aff0d6ae9.png",
								"https://user-images.githubusercontent.com/39378411/135731994-29a3c46a-0d92-4ec8-954e-39bfeeb06534.png",
								"https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png",
								"https://user-images.githubusercontent.com/39378411/135731990-8f64ce8e-d655-4ded-9561-3d7f6893d06e.png",
							]}
							overlapIcons={true}
						/>
					</>
				}
			</GlCards>
		</>
	);
});

export const { i18n } = declareComponentKeys<
	| "heroTitle"
	| "heroSubtitle"
	| "articleTitle"
	| "articleBody"
	| "articleButtonLabel"
	| "card1Title"
	| "card2Title"
	| "card3Title"
	| "card1Paragraph"
	| "card2Paragraph"
	| "card3Paragraph"
>()({ Home });