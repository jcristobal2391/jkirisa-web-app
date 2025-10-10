import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/scss/index.scss';
import 'antd/dist/antd.css';
import { App } from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root'),
);