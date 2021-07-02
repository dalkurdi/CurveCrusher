/* eslint-disable @typescript-eslint/no-namespace */
import { memo } from "react";
import { Typography } from "onyxia-ui/Typography";
import { cx } from "tss-react";
import { GlButton } from "../utils/GlButton";
import { getThemeApi } from "../theme";
import { useGuaranteedMemo } from "powerhooks";
import { GlLogo } from "../utils/GlLogo";
import { GlCard } from "./GlCard";
import type { GlCardProps } from "./GlCard";

export type GlMetricCardProps = GlCardProps & {
    number?: number;
    iconUrl?: string;
    subHeading?: string;
    buttonLabel?: string;
};

const getUseClassNames = () => {
    const { createUseClassNames } = getThemeApi();

    const { useClassNames } = createUseClassNames()(theme => ({
        "root": {
            "position": "relative",
            "display": "flex",
            "gap": theme.spacing(2),
            "justifyContent": "space-between",
            "flexDirection": "column",
            "padding": theme.spacing(3),
            ...(theme.responsive.down("lg")
                ? {
                      "margin": theme.spacing(1),
                  }
                : {}),
        },
        "subHeading": {
            "fontWeight": "normal",
            "textAlign": "center",
            ...(theme.responsive.down("lg")
                ? {
                      "fontSize": "18px",
                      "lineHeight": "28px",
                  }
                : {}),
        },

        "heading": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "gap": theme.spacing(1.7),
        },

        "headingMetric": {
            "fontSize": "86px",
            "lineHeight": "0px",
            ...(theme.responsive.down("lg")
                ? {
                      "fontSize": "52px",
                      "lineHeight": "60px",
                  }
                : {}),
        },

        "icon": {
            "width": 50,
            "height": 50,
            "fill": theme.colors.palette.focus.main,
        },

        "buttonWrapper": {
            "textAlign": "center",
        },
    }));

    return { useClassNames };
};

export const GlMetricCard = memo((props: GlMetricCardProps) => {
    const { buttonLabel, link, className, iconUrl, subHeading, number } = props;

    const { useClassNames } = useGuaranteedMemo(() => getUseClassNames(), []);

    const { classNames } = useClassNames({});

    return (
        <GlCard className={cx(classNames.root, className)} link={link}>
            <div className={classNames.heading}>
                {number !== undefined && (
                    <Typography
                        className={classNames.headingMetric}
                        variant="h1"
                    >
                        {number}
                    </Typography>
                )}

                {iconUrl !== undefined && (
                    <GlLogo className={cx(classNames.icon)} logoUrl={iconUrl} />
                )}
            </div>

            {subHeading && (
                <Typography className={classNames.subHeading} variant="h3">
                    {subHeading}
                </Typography>
            )}

            {buttonLabel && (
                <div className={classNames.buttonWrapper}>
                    <GlButton
                        type="submit"
                        color="secondary"
                        href={link?.href}
                        onClick={link?.onClick}
                    >
                        {buttonLabel}
                    </GlButton>
                </div>
            )}
        </GlCard>
    );
});