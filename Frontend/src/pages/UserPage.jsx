import React, { useEffect, useState } from 'react';
import { UserLog } from '../components/Userlog';
import { AccountSection } from '../components/AccountSection';
import { getUserProfile } from '../API/log';

export function UserPage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        console.log('Profile Data:', data.body); // Pour le débogage
        setProfile(data.body); // Assure que la structure des données est correcte
      } catch (error) {
        setError('Failed to fetch user profile');
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="UserPage">
      <section className="main bg-dark">
        {error && <p className="error">{error}</p>}
        {profile ? (
          <>
            <UserLog firstName={profile.firstName} /> {/* Passe le firstName à UserLog */}
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
