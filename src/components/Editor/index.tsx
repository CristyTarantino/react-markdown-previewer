import React from 'react'

interface IEditorProps {
    /** The text inside the editor */
    markdown: string,
    /** The function to execute once text changes inside the textarea */
    onChange: (event:React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Editor: React.FC<IEditorProps> = ({markdown, onChange}) => {
    return (
        <textarea id="editor"
                  value={markdown}
                  onChange={onChange}/>
    )
}

export default Editor
