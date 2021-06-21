/* eslint-disable @typescript-eslint/no-namespace */
import { Typography } from "onyxia-ui/Typography";
import ReactMarkdown from "react-markdown";
import { GlImage } from "./GlImage";
import type { GlImageProps } from "./GlImage";
import { memo } from "react";
import { cx, css } from "tss-react";
import { GlCode } from "./GlCode";
import type { GlCodeProps } from "./GlCode";
import { GlButton } from "./GlButton";
import { getThemeApi } from "./theme";
import { useGuaranteedMemo } from "powerhooks";
import { GlCardSection } from "./GlCards/GlCards";
import type { GlCardSectionProps } from "./GlCards/GlCards";

const getUseClassNames = () => {
    const { createUseClassNames } = getThemeApi();

    const { useClassNames } = createUseClassNames<{
        isRowReverse: boolean | undefined;
    }>()((theme, { isRowReverse }) => ({
        "root": {
            "position": "relative",
            "marginTop": theme.spacing(17.25),
            ...(theme.responsive.down("sm")
                ? {
                      "marginTop": theme.spacing(8),
                  }
                : {}),
        },

        "title": {
            "fontSize": "40px",
            "textAlign": "center",
            "marginBottom": theme.spacing(7.5),
            ...(theme.responsive.down("lg")
                ? {
                      "fontSize": "24px",
                      "lineHeight": "32px",
                  }
                : {}),
        },
        "articleAndImageWrapper": {
            "display": "flex",
            "gap": theme.spacing(16),
            "justifyContent": "center",
            "alignItems": "center",
            "marginTop": theme.spacing(17.25),
            ...(theme.responsive.down("lg")
                ? {
                      "justifyContent": "space-between",
                  }
                : {}),
            ...(theme.responsive.down("md")
                ? {
                      "flexDirection": "column-reverse",
                      "paddingLeft": theme.spacing(4.5),
                      "paddingRight": theme.spacing(4.5),
                      "marginTop": theme.spacing(8),
                      "gap": theme.spacing(8),
                  }
                : {
                      "flexDirection": isRowReverse ? "row-reverse" : "row",
                      "paddingLeft": theme.spacing(6),
                      "paddingRight": theme.spacing(6),
                  }),

            ...(theme.responsive.down("sm")
                ? {
                      "gap": theme.spacing(4),
                      ...(() => {
                          const value = theme.spacing(2);
                          return {
                              "paddingLeft": value,
                              "paddingRight": value,
                          };
                      })(),
                  }
                : {}),
        },
        "article": {
            "display": "flex",
            "flexDirection": "column",
            "textAlign": "left",

            "width": theme.responsive.down("md") ? "100%" : 412,

            "& h2": {
                "marginBottom": 14,
                ...(theme.responsive.down("lg")
                    ? {
                          "fontSize": "22px",
                          "lineHeight": "24px",
                      }
                    : {}),
            },
            "& p": {
                "fontSize": theme.typography.body1.fontSize,
                "lineHeight": "24px",
                "marginTop": 14,
                "marginBottom": 14,
                ...(theme.responsive.down("lg")
                    ? {
                          "fontSize": "16px",
                          "lineHeight": "20px",
                      }
                    : {}),
            },
            ...(theme.responsive.down("sm")
                ? {
                      "width": "100%",
                      "margin": "unset",
                      "marginTop": theme.spacing(4),
                  }
                : {}),
        },

        "illustration": {
            "width": 900,
            ...(theme.responsive.down("lg")
                ? {
                      "width": 511,
                  }
                : {}),
            ...(theme.responsive.down("md")
                ? {
                      "width": "100%",
                  }
                : {}),
        },
        "button": {
            "alignSelf": "right",
        },
    }));

    return { useClassNames };
};

export type GlSectionProps = {
    className?: string;
    cardSection?: GlCardSectionProps;
    illustration?: GlSectionProps.Illustration;
    title?: string;
    article?: {
        title: string;
        /**
         * you can use markdown between back ticks.
         */
        paragraphMd: string;
        button?: {
            className?: string;
            title: string;
            href: string;
        };
    };
    isRowReverse?: boolean;
};

export declare namespace GlSectionProps {
    export type Illustration = Illustration.Code | Illustration.Image;

    export namespace Illustration {
        type Code = { type: "code" } & GlCodeProps;

        type Image = { type: "image" } & GlImageProps;
    }
}

export const GlSection = memo((props: GlSectionProps) => {
    const { article, illustration, isRowReverse, className, cardSection, title } = props;

    const { useClassNames } = useGuaranteedMemo(() => getUseClassNames(), []);

    const { classNames } = useClassNames({
        isRowReverse,
    });

    return (
        <section className={cx(classNames.root, className)}>
            {title && (
                <Typography className={classNames.title} variant="h2">
                    {title}
                </Typography>
            )}
            {<GlCardSection {...cardSection} />}
            {(article !== undefined || illustration !== undefined) && (
                <article className={classNames.articleAndImageWrapper}>
                    {article && (
                        <div className={classNames.article}>
                            <Typography variant="h2">{article.title}</Typography>
                            <ReactMarkdown>{article.paragraphMd}</ReactMarkdown>
                            {article.button && (
                                <div
                                    className={cx(
                                        css({
                                            "display": "flex",
                                            "justifyContent": "flex-end",
                                            "marginTop": 14,
                                        }),
                                        article.button.className,
                                    )}
                                >
                                    <GlButton
                                        className={classNames.button}
                                        href={article.button.href}
                                        color="secondary"
                                    >
                                        {article.button.title}
                                    </GlButton>
                                </div>
                            )}
                        </div>
                    )}

                    {illustration &&
                        (illustration.type === "image" ? (
                            <GlImage
                                url={illustration.url}
                                alt={illustration.alt}
                                className={cx(classNames.illustration, illustration.className)}
                            />
                        ) : (
                            <GlCode
                                text={illustration.text}
                                language={illustration.language}
                                showLineNumbers={illustration.showLineNumbers}
                                className={cx(classNames.illustration, illustration.className)}
                            />
                        ))}
                </article>
            )}
        </section>
    );
});
