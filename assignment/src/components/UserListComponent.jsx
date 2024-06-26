import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialUsers } from "../store";
import ConfirmationModal from "./ConfirmationModal";

const UserListComponent = ({users,deleteUser}) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
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
  const toggleDropdown = (id) => {
    setShowDropdown(showDropdown === id ? null : id);
  };

  return (
    <div className="flex justify-center m-4 overflow-x-auto " >
     <div className="overflow-x-auto w-full">
        <table className="w-full bg-white shadow-lg rounded-lg min-w-full p-4 ">
          <thead className="bg-gray-200 font-semibold">
            <tr>
              <th className="py-2 px-4 border-b">Select</th>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b ">Phone</th>
              <th className="py-2 px-4 border-b ">Last Login</th>
              <th className="py-2 px-4 border-b ">Role</th>
              <th className="py-2 px-4 border-b ">Status</th>
              <th className="py-2 px-4 border-b ">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-sans">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b text-center">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.photo}
                      alt=""
                    />
                    <p className="ml-2">{`${user.firstName} ${user.lastName}`}</p>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.phone}</td>
                <td className="py-2 px-4 border-b">{user.lastLogin}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">{user.status}</td>
                <td className="py-2 px-4 border-b text-center ">
                  <select
                    value=""
                    onChange={(e) => {
                      const action = e.target.value;
                      if (action === "edit") {
                        handleEdit(user.id);
                      } else if (action === "delete") {
                        handleDelete(user.id);
                      }
                      // Clear the selection after action
                      e.target.value = "";
                    }}
                    className="bg-white border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="">Action</option>
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <ConfirmationModal
        isOpen={showModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default UserListComponent;
