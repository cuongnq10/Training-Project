'use client';

//1. Import Modules
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { Frame, AppProvider } from '@shopify/polaris';
import { useState } from 'react';

//2. Import Components
import TopBarMarkup from './components/TopBarMarkup';
import NavigationMarkup from './components/NavigationMarkup';

//3. Initial Data
const initialAccount = {
  fullName: 'Ngô Quốc Cường',
  address: [{ id: 0, specificAddress: '', cityAddress: '' }],
  email: 'ngoquoccuong@gmail.com',
};
const logo = {
  topBarSource:
    'https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png',
  width: 86,
  url: '/',
  accessibilityLabel: 'Shopify',
};

//4. Main App
export default function App({ children }) {
  const [account, setAccount] = useState();
  const accountFullName = account.fullName;

  return (
    <html>
      <body>
        <AppProvider i18n={enTranslations}>
          <div style={{ height: '250px' }}>
            <Frame
              topBar={<TopBarMarkup accountFullName={accountFullName} />}
              logo={logo}
              navigation={<NavigationMarkup />}
            >
              {children}
            </Frame>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
