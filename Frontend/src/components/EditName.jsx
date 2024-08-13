import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice'; // Une action pour mettre à jour l'utilisateur
import { updateUserProfile } from '../API/log'; // API call to update user profile

export function EditNameModal({ isOpen, onClose, currentFirstName }) {
  const [newFirstName, setNewFirstName] = useState(currentFirstName);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Appel API pour mettre à jour le prénom
      await updateUserProfile({ firstName: newFirstName });
      dispatch(updateUser({ firstName: newFirstName })); // Mise à jour du prénom dans le store Redux
      onClose(); // Ferme la modale après la mise à jour
    } catch (error) {
      console.error('Failed to update user profile:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Name</h2>
        <i className="fa fa-user-circle"></i>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">New First Name</label>
          <div className='firstname'>
            <p>User Name :</p>
            <input
            type="text"
            id="firstName"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            required
            />
          </div>
          <div className='form-button'>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
