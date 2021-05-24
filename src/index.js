import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios';
import './i18n'; 
import i18next from 'i18next';

const lang = localStorage.getItem('lang') || 'de';
axios.defaults.headers.common['Accept-Language'] =
  localStorage.getItem('lang') || 'de';
i18next.changeLanguage(lang);
document.documentElement.lang = lang;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
