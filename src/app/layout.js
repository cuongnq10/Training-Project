'use client';

import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { Frame, AppProvider, Loading } from '@shopify/polaris';
import React from 'react';
import { AccountProvider } from './contexts/AccountContext';

import TopBarMarkup from './components/TopBarMarkup';
import NavigationMarkup from './components/NavigationMarkup';

const logo = {
  topBarSource:
    'https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png',
  width: 86,
  url: '/',
  accessibilityLabel: 'Shopify',
};

export default function App({ children }) {
  return (
    <html>
      <head>
        <title>Shopify App</title>
        <meta name='description' content='Description' />
      </head>
      <body>
        <AppProvider i18n={enTranslations}>
          <div style={{ height: '250px' }}>
            <AccountProvider>
              <Frame
                topBar={<TopBarMarkup />}
                logo={logo}
                navigation={<NavigationMarkup />}
              >
                {children}
              </Frame>
            </AccountProvider>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
