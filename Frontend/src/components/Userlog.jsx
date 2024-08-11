import React from 'react';

export const UserLog = ({ user }) => {
  // Vérifie que `user` existe et que `user.firstName` est défini
  return (
    <div className="header">
      <h1>Welcome back<br />{user?.firstName || 'User'}</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};