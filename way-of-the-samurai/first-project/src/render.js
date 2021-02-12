import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { addPost, updateNewPostContent, clearInputProfile } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostContent={updateNewPostContent}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
