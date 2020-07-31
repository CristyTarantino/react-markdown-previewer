import React from 'react'
import marked from 'marked';
import dompurify from 'dompurify';

interface IPreviewProps {
    /** The text inside the editor */
    markdown: string
}

const Preview : React.FC<IPreviewProps> = ({markdown}) => {
    const getMarkdownText = () =>  {
        const rawMarkup = marked(markdown, { breaks: true, });
        return { __html: dompurify.sanitize(rawMarkup) };
    };

    return (
        <div id='preview' dangerouslySetInnerHTML={getMarkdownText()} />
    )
}

export default Preview
