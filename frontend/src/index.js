import theme from 'theme';
import React from 'react';
import { render } from 'react-dom';
import { StoreProvider } from 'store';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { createApolloClient } from 'utils/apollo-client';
import { Router as BrowserRouter } from 'react-router-dom';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import './assets/styles/themes.scss';
import 'normalize.css';

import App from 'pages/App';
import { initStore } from 'reducers/store';

import history from './history';

// Create a Apollo client
const API_URI = process.env.REACT_APP_API_URL;
const apolloClient = createApolloClient(API_URI);

const store = initStore(apolloClient);

render(
  <ApolloProvider client={apolloClient}>
    <ApolloHooksProvider client={apolloClient}>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <ThemeProvider theme={theme}>
            <StoreProvider>
              <App />
            </StoreProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
