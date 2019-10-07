import theme from 'theme';
import React from 'react';
import { render } from 'react-dom';
import { StoreProvider } from 'store';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { createApolloClient } from 'utils/apollo-client';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import 'normalize.css';

import App from 'components/App/App';

// Create a Apollo client
const API_URI = process.env.REACT_APP_API_URL;
const apolloClient = createApolloClient(API_URI);

render(
  <ApolloProvider client={apolloClient}>
    <ApolloHooksProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
