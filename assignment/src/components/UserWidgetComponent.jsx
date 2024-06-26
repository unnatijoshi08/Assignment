import React from "react";
import "./UserWidgetComponent.css";
import ConfirmationModal from "./ConfirmationModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserWidgetComponent({ user }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleEditClick = () => {
    toggleMenu(); // Close menu after selecting edit
    navigate(`/edit/${user.id}`); // Pass user id to edit function
  };

  const handleDeleteClick = () => {
    toggleMenu(); // Close menu after selecting delete
     // Pass user id to delete function
    setUserToDelete(user.id);
    setShowModal(true);
  };
  const handleDelete = (id) => {
    setUserToDelete(id);
    setShowModal(true);
  };
  const confirmDelete = () => {
    deleteUser(userToDelete);
    setShowModal(false);
    setUserToDelete(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setUserToDelete(null);
  };

  return (
    <div className="user-widget" >
      <div className="flex justify-center items-center gap-1.5">
      <img
        className="user-photo"
        src={user.photo}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <div >
        <p className="text-gray-700 text-base" >
          {user.firstName} {user.lastName}
        </p>
        <p className="mt-1.5 text-gray-600 text-ellipsis">{user.email}</p>
        <p className="mt-0.5 text-gray-600">
          
          {user.status ? "     🟢 Active" : " 🔴 Inactive"}
        </p>
      </div>
      </div>
      <div className="ml-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        fill="rgb(100,28,192)"
        className="bi bi-three-dots-vertical"
        viewBox="0 0 16 16"
        onClick={toggleMenu}
      >
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
      </svg>
      {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
              <div className="py-1">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
      </div>
      <ConfirmationModal
        isOpen={showModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default UserWidgetComponent;
