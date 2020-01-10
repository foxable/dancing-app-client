import React, { useState } from "react";

import { IFigure } from "../DataService";
import { Card, CardHeader, CardHeaderTitle, CardContent, CardFooter, CardFooterItem, Tag } from "./bulma";
import MarkdownContent from "./MarkdownContent";

interface IFigureProps
{
    data: IFigure;
}

const Figure: React.FC<IFigureProps> = ({ data }) =>
{
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Card isFullWidth onClick={() => setShowDetails(!showDetails)}>
            <CardHeader>
                <CardHeaderTitle>
                    {data.name}
                    {data.level === 0
                        ? <Tag className="figure-tag" isInfo>W</Tag>
                        : <Tag className="figure-tag" isLight>{data.level}</Tag> }
                </CardHeaderTitle>
            </CardHeader>
            {showDetails ?
                <>
                    { data.description && <CardContent><MarkdownContent text={data.description}/></CardContent> }
                    { data.video_url && <CardFooter><CardFooterItem href={data.video_url}>Video</CardFooterItem></CardFooter> }
                </> : "" }
        </Card>
    );
};

export default Figure;