import React from "react";
import classNames from "classnames";

export const Field: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const fieldClass = classNames(
        "field",
        className,
    );

    return <div className={fieldClass} {...props}></div>;
};