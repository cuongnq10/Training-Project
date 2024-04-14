import { BlockStack, TextField } from '@shopify/polaris';

export default function ContactFields({ fields }) {
  return (
    <BlockStack gap='300'>
      <TextField
        type='text'
        label='Full name'
        autoComplete='off'
        {...fields.fullNameValue}
        placeholder='Your name'
      />
      <TextField
        type='email'
        label='Email'
        autoComplete='off'
        {...fields.emailValue}
        placeholder='Your email'
      />
    </BlockStack>
  );
}
