import React, { useContext, useEffect, useState } from 'react';
const AccountContext = React.createContext();
const SetAccountContext = React.createContext();

const initialAccount = {
  fullName: '',
  address: [{ id: 0, specificAddress: '', cityAddress: '' }],
  email: '',
};

export function useAccount() {
  return useContext(AccountContext);
}

export function useSetAccount() {
  return useContext(SetAccountContext);
}

export function AccountProvider({ children }) {
  const [account, setAccount] = useState(initialAccount);
  useEffect(function () {
    async function getAccount() {
      try {
        const res = await fetch('/api/account');
        const { data } = await res.json();
        setAccount(data.account);
      } catch (err) {
        console.error(err.message);
        setAccount(initialAccount); //Trường hợp file JSON trống trơn, khi đó set account quay lại giá trị mặc định.
      }
    }
    getAccount();
  }, []);

  return (
    <AccountContext.Provider value={account}>
      <SetAccountContext.Provider value={setAccount}>
          {children}
      </SetAccountContext.Provider>
    </AccountContext.Provider>
  );
}
