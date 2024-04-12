'use client';

import { Page, Layout, Card, DataTable } from '@shopify/polaris';
import AddressesTable from './components/AddressesTable';

const initialAccount = {
  fullName: 'Ngô Quốc Cường',
  address: [{ id: 0, specificAddress: '', cityAddress: '' }],
  email: 'ngoquoccuong@gmail.com',
};

export default function AddressesPage() {
  const account = initialAccount;
  const addressRows = account.address.map((address) => [
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
