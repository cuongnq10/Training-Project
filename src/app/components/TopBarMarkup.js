'use client';

import { TopBar } from '@shopify/polaris';
export default function TopBarMarkup({ accountFullName }) {
  const userMenuMarkup = (
    <TopBar.UserMenu
      name={accountFullName.split(' ')[0]}
      detail={accountFullName}
      initials={accountFullName[0]}
    />
  );
  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={() => {}}
      value=''
      placeholder='Search'
      showFocusBorder
    />
  );

  return <TopBar userMenu={userMenuMarkup} searchField={searchFieldMarkup} />;
}
