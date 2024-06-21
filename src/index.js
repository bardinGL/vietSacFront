import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './component/GlobalStyles';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStyles>
      <App />
  </GlobalStyles>
);