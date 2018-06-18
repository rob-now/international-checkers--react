import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppNew from "./AppNew";
import './index.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppNew/>,
  document.getElementById('root'));
registerServiceWorker();
