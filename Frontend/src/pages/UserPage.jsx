import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts } from '../redux/bankSlice';
import { fetchUserProfile } from '../redux/authSlice'; // Ou profileSlice si séparé
import { UserLog } from '../components/UserLog';
import { AccountSection } from '../components/AccountSection';

export const UserPage = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { accounts, status, error } = useSelector((state) => state.bank);

  useEffect(() => {
    if (token && user) {
      dispatch(fetchUserProfile(token)); // Récupère le profil utilisateur si nécessaire
      dispatch(fetchAccounts(user.id)); // Utilise l'ID de l'utilisateur pour récupérer les comptes
    }
  }, [dispatch, token, user]);

  if (status === 'loading') {
    return <p>Loading accounts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="UserPage">
      <section className="main bg-dark">
        <UserLog username={user ? user.firstName : 'User'} />
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account) => (
          <AccountSection
            key={account.id}
            title={account.name}
            amount={account.balance}
            description={account.description}
          />
        ))}
      </section>
    </div>
  );
};