import { CodeBlock, dracula } from "react-code-blocks";
import { memo } from "react";
import { getThemeApi } from "../theme";
import { cx, css } from "tss-react";
import { useGuaranteedMemo } from "powerhooks";

const colors = {
    "tomatoRed": "#f85b52",
    "goldenRoad": "#e1bb2a",
    "limeGreen": "#54bd2b",
    "darkslategray": "#282a36",
};

const getUseClassNames = () => {
    const { createUseClassNames } = getThemeApi();

    const { useClassNames } = createUseClassNames<{
        hasDecorativeVsCodeButtons: boolean;
    }>()((theme, { hasDecorativeVsCodeButtons }) => ({
        "root": {
            ...(hasDecorativeVsCodeButtons
                ? {
                      "position": "relative",
                      "borderTop": `solid ${colors.darkslategray} 24px`,
                      "borderRadius": 3,
                  }
                : {}),
        },
        "vsCodeButtons": {
            "position": "absolute",
            "top": theme.spacing(-2),
            "left": theme.spacing(1),
        },
    }));

    return {
        useClassNames,
    };
};

export type GlCodeProps = {
    className?: string;
    text?: string;
    language?: string;
    showLineNumbers?: boolean;
    hasDecorativeVsCodeButtons?: boolean;
};

export const GlCode = memo((props: GlCodeProps) => {
    const {
        className,
        language,
        showLineNumbers,
        text,
        hasDecorativeVsCodeButtons,
    } = props;

    const { useClassNames } = useGuaranteedMemo(() => getUseClassNames(), []);

    console.log(hasDecorativeVsCodeButtons);

    const { classNames } = useClassNames({
        "hasDecorativeVsCodeButtons": hasDecorativeVsCodeButtons ?? false,
    });

    return (
        <div className={cx(classNames.root, className)}>
            {hasDecorativeVsCodeButtons !== undefined &&
                hasDecorativeVsCodeButtons && (
                    <VsCodeButtons className={classNames.vsCodeButtons} />
                )}
            <CodeBlock
                language={language}
                showLineNumbers={showLineNumbers}
                text={text}
                theme={dracula}
            />
        </div>
    );
});

const { VsCodeButtons } = (() => {
    const { createUseClassNames } = getThemeApi();

    const { useClassNames } = createUseClassNames()(theme => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(1),
        },
        "icon": {
            ...(() => {
                const value = 14;
                return {
                    "width": value,
                    "height": value,
                };
            })(),
            "borderRadius": "50%",
        },
    }));

    type VsCodeButtonsProps = {
        className?: string;
    };

    const VsCodeButtons = memo((props: VsCodeButtonsProps) => {
        const { className } = props;

        const { classNames } = useClassNames({});
        return (
            <div className={cx(classNames.root, className)}>
                {[colors.tomatoRed, colors.goldenRoad, colors.limeGreen].map(
                    color => {
                        return (
                            <div
                                className={cx(
                                    classNames.icon,
                                    css({
                                        "backgroundColor": color,
                                    }),
                                )}
                                key={color}
                            ></div>
                        );
                    },
                )}
            </div>
        );
    });

    return { VsCodeButtons };
})();
