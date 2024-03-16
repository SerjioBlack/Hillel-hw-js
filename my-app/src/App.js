import React from 'react';
import { createRoot } from 'react-dom/client';
import PostCatalog from './components/PostCatalog.jsx';

const root = createRoot(document.getElementById('root'));

const App = () => (
    <React.StrictMode>
        <PostCatalog />
    </React.StrictMode>
);

root.render(<App />);

export default App