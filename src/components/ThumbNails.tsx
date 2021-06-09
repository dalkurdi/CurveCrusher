import { createUseClassNames } from "../theme";
import { Typography } from "onyxia-ui/Typography";
import { memo } from "react";
import Link from "@material-ui/core/Link";
import { cx } from "tss-react";

export type ThumbNailProps = {
    className?: string;
    thumbNails: {
        title?: string;
        href?: string;
        width?: string | number;
        height?: string | number;
    }[];
};

const { useClassNames } = createUseClassNames<{ width?: number | string; height?: number | string }>()(
    (...[theme, { height, width }]) => ({
        "root": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "center",
            "marginBottom": 138,

            "& div": {
                "position": "relative",
                "height": height !== undefined ? height : 280,
                "width": width !== undefined ? width : 557,
                "borderRadius": 16,
                "backgroundColor": theme.isDarkModeEnabled
                    ? theme.colors.palette.dark.greyVariant1
                    : theme.colors.palette.light.greyVariant1,
                "marginLeft": theme.spacing(1.5),
                "marginRight": theme.spacing(1.5),
                "& a": {
                    "width": "100%",
                    "height": "100%",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center",
                },
                "cursor": "pointer",
            },
        },
    }),
);

export const ThumbNails = memo((props: ThumbNailProps) => {
    const { thumbNails, className } = props;

    const { classNames } = useClassNames({});
    return (
        <div className={cx(className, classNames.root)}>
            {thumbNails.map((thumbNail, index) => (
                <div key={index}>
                    {thumbNail.title && (
                        <Link href={thumbNail.href}>
                            <Typography variant="h5">{thumbNail.title}</Typography>
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
});
