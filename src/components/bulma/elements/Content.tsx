import React from "react";
import classNames from "classnames";

export const Content: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
    const contentClass = classNames(
        "content",
        className
    );

    return <div className={contentClass} {...props}></div>;
};