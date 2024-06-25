import "./tailwind.css";
import React from "react";

const DeleteUserComponent = ({ user, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl mb-4">Confirm Delete</h2>
        <p className="mb-4">
          Are you sure you want to delete {user.firstName} {user.lastName}?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
            onClick={() => onDelete(user)}
          >
            Yes, Delete
          </button>
          <button
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => onDelete(null)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserComponent;
