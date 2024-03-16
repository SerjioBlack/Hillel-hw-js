import React from 'react';
import { createRoot } from 'react-dom/client';
import PostCatalog from './components/PostCatalog.jsx';

const App = () => (
    <React.StrictMode>
        <PostCatalog />
    </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);


export default App