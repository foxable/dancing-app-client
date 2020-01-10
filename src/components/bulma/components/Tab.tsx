import React from "react";
import classNames from "classnames";

interface ITabProps extends React.HTMLProps<HTMLLIElement>
{
    isActive?: boolean;
}

export const Tab: React.FC<ITabProps> = ({ isActive, className, ...props }) => {
    const tabClass = classNames(
        {
            "is-active": isActive
        },
        className
    );

    return <li className={tabClass} {...props}></li>;
};