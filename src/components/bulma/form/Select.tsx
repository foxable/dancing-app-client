import React from "react";
import classNames from "classnames";

interface ISelectProps extends React.HTMLProps<HTMLSelectElement>
{
    isMultiple?: boolean;
    isSmall?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;
    isFullWidth?: boolean;
}

export const Select: React.FC<ISelectProps> = ({ isMultiple, isSmall, isMedium, isLarge, isFullWidth, className, ...props }) => {
    const selectClass = classNames(
        "select",
        {
            "is-multiple": isMultiple,
            "is-small": isSmall,
            "is-medium": isMedium,
            "is-large": isLarge,
            "is-fullwidth": isFullWidth
        },
        className,
    );

    return (
        <div className={selectClass}>
            <select {...props}></select>            
        </div>
    );
};