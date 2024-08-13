import React, { useState } from 'react';
import { EditNameModal } from '../components/EditName';

export function UserLog({ firstName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="header">
      <h1>Welcome back<br />{firstName}</h1>
      <button className="edit-button" onClick={openModal}>Edit Name</button>
      <EditNameModal
        isOpen={isModalOpen}
        onClose={closeModal}
        currentFirstName={firstName}
      />
    </div>
  );
}
