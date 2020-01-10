import React from "react";
import classNames from "classnames";

export const CardFooter: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const cardFooterClass = classNames(
        "card-footer",
        className
    );

    return <div className={cardFooterClass} {...props}></div>;
};