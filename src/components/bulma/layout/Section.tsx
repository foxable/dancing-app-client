import React from "react";
import classNames from "classnames";

export const Section: React.FC<React.HTMLProps<HTMLElement>> = ({ className, ...props }) => {
    const sectionClass = classNames(
        "section",
        className
    );

    return <section className={sectionClass} {...props}></section>;
};