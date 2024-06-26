import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {App} from './app/App';

const rootNode = document.getElementById("root");

if (rootNode) {
    createRoot(rootNode).render(<App/>);
}


