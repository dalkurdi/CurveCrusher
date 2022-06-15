/* eslint-disable no-irregular-whitespace */

import type { ThemeProviderProps } from "onyxia-ui";
import { createMakeStyles } from "tss-react/compat";
import { createIcon } from "onyxia-ui/Icon";
import { createIconButton } from "onyxia-ui/IconButton";
import { createButton } from "onyxia-ui/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
import { createText } from "onyxia-ui/Text";
import { breakpointsValues as defaultBreakpointsValues } from "onyxia-ui";
import { useStyles } from "onyxia-ui/lib/ThemeProvider";
import type { IllustrationProps } from "./tools/IllustrationProps";

export function useTheme() {
    const { theme } = useStyles();

    return {
        ...theme,
        "paddingRightLeft": theme.spacing(
            (() => {
                if (theme.windowInnerWidth >= breakpointsValues["lg"]) {
                    return 7;
                }

                if (theme.windowInnerWidth >= breakpointsValues["sm"]) {
                    return 6;
                }

                return 4;
            })(),
        ),
        "customShadow": "2px 3px 35px -1px rgba(0,0,0,0.45);",
    };
}

export const { makeStyles } = createMakeStyles({ useTheme });

export const { Text } = createText({ useTheme });

export const { Icon } = createIcon({
    "brightness4": Brightness4Icon,
    "brightness7": Brightness7Icon,
    "arrowBackIos": ArrowBackIosIcon,
    "arrowForwardIos": ArrowForwardIosIcon,
    "dehaze": DehazeIcon,
    "brightness1Rounded": Brightness1RoundedIcon,
});

export const { IconButton } = createIconButton({ Icon });

export const { Button } = createButton({ Icon });

export const breakpointsValues = {
    ...defaultBreakpointsValues,
    "lg+": 1440 as const,
};

export const splashScreen: ThemeProviderProps["splashScreen"] = {
    "Logo": () => null,
    "minimumDisplayDuration": 0,
};

export const useIllustrationStyles = makeStyles<{
    aspectRatio: number;
    illustrationZoomFactor: number | undefined;
    type: IllustrationProps["type"] | undefined;
}>()((theme, { aspectRatio, illustrationZoomFactor, type }) => ({
    "root": {
        ...(() => {
            if (type === "custom component" || type === undefined) {
                return undefined;
            }

            if (isNaN(aspectRatio)) {
                return {
                    "opacity": 0,
                };
            }

            const value =
                (() => {
                    if (aspectRatio <= 1) {
                        return 600 * aspectRatio;
                    }

                    return 600;
                })() * (illustrationZoomFactor ?? 1);
            return {
                "maxWidth": value,
                "minWidth":
                    theme.windowInnerWidth < breakpointsValues.md
                        ? undefined
                        : value,
                "alignSelf":
                    theme.windowInnerWidth < breakpointsValues.md
                        ? "center"
                        : undefined,
            };
        })(),
    },
}));
