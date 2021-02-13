import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={store.addPost.bind(store)}
          updateNewPostContent={store.updateNewPostContent.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals();
