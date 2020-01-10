import React from "react";
import classNames from "classnames";

export const CardHeader: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const cardHeaderClass = classNames(
        "card-header",
        className
    );

    return <div className={cardHeaderClass} {...props}></div>;
};