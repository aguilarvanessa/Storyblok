import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {storyblokInit, apiPlugin} from "@storyblok/react"
storyblokInit({
  accessToken: 'kb2JDdBc58v8pho0HK3Utgtt',
  use:[apiPlugin],
  version: 'published'
  
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
