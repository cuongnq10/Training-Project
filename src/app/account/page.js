'use client';
import { Page, Layout, Form, Card, BlockStack } from '@shopify/polaris';
import {
  useForm,
  useField,
  notEmpty,
  useDynamicList,
} from '@shopify/react-form';

import UserInfoFields from './components/UserInfoFields';
import AddressFields from './components/AddressFields';
import FormButtons from './components/FormButtons';
import ToastMarkup from './components/ToastMarkup';
import { useState } from 'react';

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

export default function AccountPage() {
  const [account, setAccount] = useState(initialAccount);
  const accountFullName = account.fullName;
  const accountEmail = account.email;
  const addressList = account.address;

  const [activeToast, setActiveToast] = useState(false);

  function handleToggleToast() {
    setActiveToast((active) => !active);
  }

  function emtyAddressFactory() {
    return { id: Date.now(), specificAddress: '', cityAddress: '' };
  }

  const { fields, submit } = useForm({
    fields: {
      fullNameValue: useField({
        value: accountFullName,
        validates: [notEmpty('Field is required')],
      }),
      emailValue: useField({
        value: accountEmail,
        validates: [notEmpty('Field is required')],
      }),
      addressValues: useDynamicList(addressList, emtyAddressFactory),
    },
    async onSubmit(form) {
      handleToggleToast();
      setAccount({
        fullName: form.fullNameValue,
        email: form.emailValue,
        address: form.addressValues.fields.filter(
          (address) =>
            address.specificAddress.trim() !== '' ||
            address.cityAddress.trim() !== ''
        ),
      });
      return { status: 'success' };
    },
  });

  return (
    <Page title='Account'>
      <Layout>
        <Layout.AnnotatedSection
          title='Account details'
          description='Shopify will use this as your account information.'
        >
          <Form onSubmit={submit}>
            <Layout sectioned>
              <Layout.Section>
                <Card>
                  <UserInfoFields fields={fields} />
                </Card>
              </Layout.Section>
              <Layout.Section>
                <Card>
                  <BlockStack gap='300'>
                    {fields.addressValues.fields.map((field, index) => (
                      <AddressFields
                        field={field}
                        index={index}
                        key={field.id.value}
                      />
                    ))}
                    <FormButtons fields={fields} />
                  </BlockStack>
                </Card>
              </Layout.Section>
            </Layout>
          </Form>
        </Layout.AnnotatedSection>
      </Layout>
      <ToastMarkup
        activeToast={activeToast}
        onToggleToast={handleToggleToast}
      />
    </Page>
  );
}
