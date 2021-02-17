import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.scss'
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App
          store={store}
        />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
