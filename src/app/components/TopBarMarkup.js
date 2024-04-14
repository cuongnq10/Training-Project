'use client';
import { TopBar } from '@shopify/polaris';
import { useAccount } from '../contexts/AccountContext';

export default function TopBarMarkup() {
  const account = useAccount();
  const accountFullName = account.fullName;
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
