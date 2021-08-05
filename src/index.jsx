import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-kn5i5b65.eu.auth0.com"
      clientId="sLPFBbyNRrl7CW4geOJWq2RXiiaNJSkb"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
