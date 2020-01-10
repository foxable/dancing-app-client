import React from "react";
import classNames from "classnames";

interface IContainerProps extends React.HTMLProps<HTMLDivElement>
{
    isFluid?: boolean;
    isWidescreen?: boolean;
    isFullHd?: boolean;
}

export const Container: React.FC<IContainerProps> = ({ isFluid, isWidescreen, isFullHd, className, ...props }) => {
    const containerClass = classNames(
        "container",        
        {
            "is-fluid": isFluid,
            "is-widescreen": isWidescreen,
            "is-fullhd": isFullHd
        },
        className,
    );

    return <div className={containerClass} {...props}></div>;
};