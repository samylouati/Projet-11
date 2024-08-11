import React from 'react';

export const UserLog = ({ user }) => {
  return (
    <div className="header">
      <h1>Welcome back<br />{user?.firstname || 'user'}</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};
