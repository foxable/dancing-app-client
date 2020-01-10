import React from "react";
import classNames from "classnames";

export const CardHeaderTitle: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const cardHeaderTitleClass = classNames(
        "card-header-title",
        className
    );

    return <div className={cardHeaderTitleClass} {...props}></div>;
};