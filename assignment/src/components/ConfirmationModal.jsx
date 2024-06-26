import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md mx-4">
        <h2 className="text-gray-700 text-lg mb-4">Delete Confirmation</h2>
        <p className="text-gray-700 mb-4">Are you sure you want to delete this User?</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="p-2 bg-gray-500 text-white rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="p-2 bg-[#641CC0] text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
