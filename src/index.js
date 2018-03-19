import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();
