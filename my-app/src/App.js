import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import MarkdownEditor from './components/MarkdownEditor.jsx';

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

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);