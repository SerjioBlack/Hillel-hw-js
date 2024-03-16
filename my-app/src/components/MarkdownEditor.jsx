import React, { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';

import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef(null);
    const editorInstance = useRef(null);

    useEffect(() => {
        editorInstance.current = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        });

        editorInstance.current.addHook('change', () => {
            const content = editorInstance.current.getMarkdown();
            onContentChange(content);
        });

        return () => {
            editorInstance.current.destroy();
        };
    }, [onContentChange]);

    return <div ref={editorRef} />;
};

export default MarkdownEditor;