import { memo } from "react";
import { validateEmail } from "../utils/validateEmail";
import { validatePhoneNumber } from "../utils/validatePhoneNumber";
import Link from "@material-ui/core/Link";
import { Typography } from "onyxia-ui";
import { getThemeApi } from "../theme";
import { useGuaranteedMemo } from "powerhooks";
import { cx } from "tss-react";
import type { ReactNode } from "react";

export type GlFooterInfoProps = {
    className?: string;
    email?: string;
    phoneNumber?: string;
    children?: ReactNode;
};

const getUseClassNames = () => {
    const { createUseClassNames } = getThemeApi();

    const { useClassNames } = createUseClassNames()(theme => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "justifyContent": "center",
            "gap": theme.spacing(1),
            ...(() => {
                const value = theme.spacing(4);

                return {
                    "paddingTop": value,
                    "paddingBottom": value,
                };
            })(),
        },
        "email": {
            "color": theme.colors.useCases.typography.textSecondary,
        },
    }));

    return {
        useClassNames,
    };
};

export const GlFooterInfo = memo((props: GlFooterInfoProps) => {
    const { email, phoneNumber, className, children } = props;

    if (email !== undefined && !validateEmail(email)) {
        throw new Error("email entered as prop is not valid!");
    }

    if (phoneNumber !== undefined && !validatePhoneNumber(phoneNumber)) {
        throw new Error("phone number not valid!");
    }

    const { useClassNames } = useGuaranteedMemo(() => getUseClassNames(), []);

    const { classNames } = useClassNames({});

    return (
        <div className={cx(classNames.root, className)}>
            {email !== undefined && (
                <Link className={classNames.email} href={`mailto:${email}`}>
                    {email}
                </Link>
            )}

            {phoneNumber !== undefined && (
                <Typography variant="body2">{phoneNumber}</Typography>
            )}

            {children}
        </div>
    );
});