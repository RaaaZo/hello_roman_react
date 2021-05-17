import { worker } from 'mocks/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});
