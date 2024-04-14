'use client';
import { Page, Layout, Form, Card, BlockStack } from '@shopify/polaris';
import {
  useForm,
  useField,
  notEmpty,
  useDynamicList,
} from '@shopify/react-form';

import { useState } from 'react';
import { useAccount, useSetAccount } from '../contexts/AccountContext';

import ContactFields from './components/ContactFields';
import AddressFields from './components/AddressFields';
import FormButtons from './components/FormButtons';
import ToastMarkup from './components/ToastMarkup';

const logo = {
  topBarSource:
    'https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png',
  width: 86,
  url: '/',
  accessibilityLabel: 'Shopify',
};

export default function AccountPage() {
  const account = useAccount();
  const setAccount = useSetAccount();

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
      const newAccount = {
        fullName: form.fullNameValue,
        email: form.emailValue,
        address: form.addressValues.fields.filter(
          (address) =>
            address.specificAddress.trim() !== '' ||
            address.cityAddress.trim() !== ''
        ),
      };
      setAccount(newAccount);
      fetch('/api/account', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAccount),
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
                  <ContactFields fields={fields} />
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
