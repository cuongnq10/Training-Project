import { BlockStack, TextField } from '@shopify/polaris';

export default function AddressFields({ field, index }) {
  return (
    <BlockStack gap='300'>
      <TextField
        label={`Address (${index + 1})`}
        type='text'
        {...field.specificAddress}
        autoComplete='off'
        placeholder='Your address'
      />
      <TextField
        label='City'
        type='text'
        {...field.cityAddress}
        autoComplete='off'
        placeholder='Your city'
      />
    </BlockStack>
  );
}
