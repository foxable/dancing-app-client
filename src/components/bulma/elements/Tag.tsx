import React from "react";
import classNames from "classnames";

interface ITagProps extends React.HTMLProps<HTMLDivElement>
{
    isBlack?: boolean;
    isDark?: boolean;
    isLight?: boolean;
    isWhite?: boolean;
    isPrimary?: boolean;
    isLink?: boolean;
    isInfo?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isDanger?: boolean;

    isNormal?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;

    isRounded?: boolean;
    isDelete?: boolean;
}

export const Tag: React.FC<ITagProps> = ({ isBlack, isDark, isLight, isWhite, isPrimary, isLink, isInfo, isSuccess, isWarning, isDanger, isNormal, isMedium, isLarge, isRounded, isDelete, className, ...props }) => {
    const tagClass = classNames(
        "tag",
        {
            "is-black": isBlack,
            "is-dark": isDark,
            "is-light": isLight,
            "is-white": isWhite,
            "is-primary": isPrimary,
            "is-link": isLink,
            "is-info": isInfo,
            "is-success": isSuccess,
            "is-warning": isWarning,
            "is-danger": isDanger,
            "is-normal": isNormal,
            "isMedium": isMedium,
            "is-large": isLarge,
            "is-rounded": isRounded,
            "is-delete": isDelete
        },
        className
    );

    return <div className={tagClass} {...props}></div>;
};