import { Card, DataTable } from '@shopify/polaris';
export default function AddressesTable({ addressRows }) {
  return (
    <Card>
      <DataTable
        columnContentTypes={['text', 'text']}
        headings={['Address', 'City']}
        rows={addressRows}
      />
    </Card>
  );
}
