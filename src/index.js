import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import routes from './Routes/index';
import {Router,BrowserRouter} from 'react-router-dom';

import store from "./Store";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
