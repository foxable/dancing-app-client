import React from "react";
import classNames from "classnames";

interface IHeroProps extends React.HTMLProps<HTMLElement>
{
    isPrimary?: boolean;
    isInfo?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isDanger?: boolean;
    isLight?: boolean;
    isDark?: boolean;
    
    isMedium?: boolean;
    isLarge?: boolean;
    isFullHeight?: boolean;
}

export const Hero: React.FC<IHeroProps> = ({ isPrimary, isInfo, isSuccess, isWarning, isDanger, isLight, isDark, isMedium, isLarge, isFullHeight, className, ...props }) => {
    const heroClass = classNames(
        "hero",
        {
            "is-primary": isPrimary,
            "is-info": isInfo,
            "is-success": isSuccess,
            "is-warning": isWarning,
            "is-danger": isDanger,
            "is-light": isLight,
            "is-dark": isDark,
            "is-medium": isMedium,
            "is-large": isLarge,
            "is-fullheight": isFullHeight
        },
        className
    );

    return <section className={heroClass} {...props}></section>;
};