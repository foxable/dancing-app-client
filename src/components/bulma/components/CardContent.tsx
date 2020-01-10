import React from "react";
import classNames from "classnames";

export const CardContent: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const cardContentClass = classNames(
        "card-content",
        className
    );

    return <div className={cardContentClass} {...props}></div>;
};