import React from 'react';
import { UserLog } from '../components/UserLog';
import { AccountSection } from '../components/AccountSection';

export function UserPage() {

  return (
    <div className="UserPage">
      <section className="main bg-dark">
        <UserLog/>
        <h2 className="sr-only">Accounts</h2>
        <AccountSection />
      </section>
    </div>
  );
}
