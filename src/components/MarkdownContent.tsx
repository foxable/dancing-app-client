import React from "react";
import marked from "marked";

import { Content } from "./bulma";

interface IMarkdownContentProps
{
    text: string;
}

const MarkdownContent: React.FC<IMarkdownContentProps> = ({ text }) =>
{
    const innerHtml = { __html: marked(text) };
        
    return <Content dangerouslySetInnerHTML={innerHtml}/>;
};

export default MarkdownContent;