import { Typography } from '@material-ui/core';
import marked from 'marked';
import React from 'react';

interface IMarkdownContentProps {
  text: string;
}

const MarkdownContent: React.FC<IMarkdownContentProps> = ({ text }) => {
  const innerHtml = { __html: marked(text) };

  return <Typography dangerouslySetInnerHTML={innerHtml} />;
};

export default MarkdownContent;
