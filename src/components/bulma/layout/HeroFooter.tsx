import React from "react";
import classNames from "classnames";

export const HeroFooter: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const heroFooterClass = classNames(
        "hero-foot",
        className
    );

    return <div className={heroFooterClass} {...props}></div>;
};