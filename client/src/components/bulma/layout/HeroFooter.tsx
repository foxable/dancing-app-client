import * as React from "react";
import * as classNames from "classnames";

export const HeroFooter: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, children, ...props }): JSX.Element => {
    className = classNames(
        "hero-foot",
        className
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
}