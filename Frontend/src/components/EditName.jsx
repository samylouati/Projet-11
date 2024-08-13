import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userSlice';
import { updateUserProfile } from '../API/log';

export function EditNameModal({ isOpen, onClose, currentFirstName }) {
  const [newFirstName, setNewFirstName] = useState(currentFirstName);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token); // Récupérez le token depuis Redux

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ firstName: newFirstName }, token);
      dispatch(updateUser({ firstName: newFirstName }));
      onClose();
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
