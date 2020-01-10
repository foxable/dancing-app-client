import React from "react";
import classNames from "classnames";

interface IControlProps extends React.HTMLProps<HTMLDivElement>
{
    isExpanded?: boolean;
}

export const Control: React.FC<IControlProps> = ({ isExpanded, className, ...props }) => {
    const controlClass = classNames(
        "control",
        {
            "is-expanded": isExpanded
        },
        className,
    );

    return <div className={controlClass} {...props}></div>;
};