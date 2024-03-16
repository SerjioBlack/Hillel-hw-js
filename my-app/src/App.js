import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import MarkdownEditor from './components/MarkdownEditor.jsx';
import './index.css';

const App = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    const handleContentChange = (content) => {
        setMarkdownContent(content);
    };

    return (
        <div>
            <MarkdownEditor onContentChange={handleContentChange} />
            <div>
                <h2>Markdown Content:</h2>
                <pre>{markdownContent}</pre>
            </div>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;