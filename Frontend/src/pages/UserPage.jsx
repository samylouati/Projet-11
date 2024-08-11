import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts } from '../redux/bankSlice';
import { fetchUserProfile } from '../redux/userSlice';
import { UserLog } from '../components/UserLog';
import { AccountSection } from '../components/AccountSection';

export const UserPage = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { accounts, status, error } = useSelector((state) => state.bank);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchAccounts(user.id));
    }
  }, [dispatch, user]);

  // Ajouter console.log pour déboguer
  useEffect(() => {
    console.log('User:', user);
    console.log('Accounts:', accounts);
  }, [user, accounts]);

  if (status === 'loading') {
    return <p>Loading accounts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="UserPage">
      <section className="main bg-dark">
        <UserLog user={user} />
        <h2 className="sr-only">Accounts</h2>
        {accounts.length > 0 ? (
          accounts.map((account) => (
            <AccountSection
              key={account.id}
              title={account.name}
              amount={account.balance}
              description={account.description}
            />
          ))
        ) : (
          <p>No accounts available.</p>
        )}
      </section>
    </div>
  );
};
