'use client';

import { ButtonGroup, Button, BlockStack } from '@shopify/polaris';

export default function FormButtons({ fields }) {
  return (
    <BlockStack inlineAlign='end'>
      <ButtonGroup segmented spacing='tight'>
        <Button onClick={() => fields.addressValues.addItem()}>
          New Address
        </Button>
        <Button submit>Save</Button>
      </ButtonGroup>
    </BlockStack>
  );
}
