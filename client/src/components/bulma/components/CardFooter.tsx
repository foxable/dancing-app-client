import * as React from "react";
import * as classNames from "classnames";

export const CardFooter: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, children, ...props }): JSX.Element => {
    className = classNames(
        "card-footer",
        className
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};