'use client';

import { Page, Layout, Card, DataTable } from '@shopify/polaris';
import AddressesTable from './components/AddressesTable';
import { useAccount } from '../contexts/AccountContext';

export default function AddressesPage() {
  const account = useAccount();
  const addressRows =
    account.address.map((address) => [
      address.specificAddress,
      address.cityAddress,
    ]);

  return (
    <Page title='Addresses'>
      <Layout>
        <Layout.AnnotatedSection
          title='Addresses details'
          description='You can click on Account menu to edit addresses.'
        >
          <AddressesTable addressRows={addressRows} />
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
}
