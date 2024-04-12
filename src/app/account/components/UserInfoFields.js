import { BlockStack, TextField } from '@shopify/polaris';

export default function UserInfoFields({ fields }) {
  return (
    <BlockStack gap='300'>
      <TextField
        type='text'
        label='Full name'
        autoComplete='off'
        {...fields.fullNameValue}
      />
      <TextField
        type='email'
        label='Email'
        autoComplete='off'
        {...fields.emailValue}
      />
    </BlockStack>
  );
}
