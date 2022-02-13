import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//for Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* parent of everything within our application so everything has access to the store  */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
