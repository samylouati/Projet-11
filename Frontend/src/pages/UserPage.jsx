import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UserLog } from '../components/Userlog';
import { AccountSection } from '../components/AccountSection';
import { getUserProfile } from '../API/log';

export function UserPage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const token = useSelector((state) => state.user.token); // Récupérez le token depuis Redux

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(token);
        setProfile(data.body);
      } catch (error) {
        setError('Failed to fetch user profile');
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  return (
    <div className="UserPage">
      <section className="main bg-dark">
        {error && <p className="error">{error}</p>}
        {profile ? (
          <>
            <UserLog firstName={profile.firstName} />
            <h2 className="sr-only">Accounts</h2>
            <AccountSection />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
}
