import React from "react";
import classNames from "classnames";

type CardFooterItemProps = React.HTMLProps<HTMLDivElement & HTMLAnchorElement>;

export const CardFooterItem: React.FunctionComponent<CardFooterItemProps> = ({ className, ...props }) => {
    const cardFooterItemClass = classNames(
        "card-footer-item",
        className
    );

    if (props.href)
    {
        // eslint-disable-next-line
        return <a className={cardFooterItemClass} {...props}></a>;
    }

    return <div className={cardFooterItemClass} {...props}></div>;
};