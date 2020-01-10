import React from "react";
import classNames from "classnames";

interface ICardProps extends React.HTMLProps<HTMLDivElement>
{
    isFullWidth?: boolean;
}

export const Card: React.FC<ICardProps> = ({ isFullWidth, ...props }) => {
    const cardClass = classNames(
        "card",
        {
            "is-fullwidth": isFullWidth
        },
        props
    );

    return <div className={cardClass} {...props}></div>;
};