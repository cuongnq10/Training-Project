'use client';

import { useRouter, usePathname } from 'next/navigation';

import { Navigation } from '@shopify/polaris';
import {
  ArrowLeftIcon,
  HomeIcon,
  OrderIcon,
  ChatIcon,
} from '@shopify/polaris-icons';

export default function NavigationMarkup() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Navigation location='/'>
      <Navigation.Section
        items={[
          {
            label: 'Home',
            icon: ArrowLeftIcon,
            onClick: () => {
              router.push('/account');
            },
          },
        ]}
      />
      <Navigation.Section
        separator
        title='Shopify App'
        items={[
          {
            label: 'Account',
            icon: HomeIcon,
            onClick: () => {
              router.push('/account');
            },
            selected: pathname === '/account' || pathname === '/',
          },
          {
            label: 'Addresses',
            icon: OrderIcon,
            onClick: () => {
              router.push('/addresses');
            },
            selected: pathname === '/addresses',
          },
        ]}
        action={{
          icon: ChatIcon,
          accessibilityLabel: 'Contact support',
        }}
      />
    </Navigation>
  );
}
