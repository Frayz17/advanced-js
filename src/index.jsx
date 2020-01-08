import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { posts, newStore, StoreProvider, nav, menu, homeTest, slides } from 'Services/Store';
import GlobalStyles from './globalStyles';
import '@fortawesome/fontawesome-free/css/all.min.css';

newStore({ posts, nav, menu, homeTest, slides });

ReactDom.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
