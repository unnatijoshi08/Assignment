import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const EditUserComponent = ({ users, updateUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(user => user.id === parseInt(id));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    status: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status,
        password: '',
        confirmPassword: '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const updatedUser = {
      ...user,
      ...formData,
    };
    delete updatedUser.confirmPassword;
    updateUser(updatedUser);
    navigate('/test-page');
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="w-screen h-screen border flex lg:flex-row">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <Header />
        <div className="bg-[#F9F9F9] p-4 mt-4 w-full">
          <div className="w-full flex justify-between items-center font-semibold">
            <div className="ml-6 text-xl">Users</div>
            </div>
    <div className="flex flex-1 justify-center w-full">
      <form className="bg-white p-8 rounded-2xl shadow-md w-full md:mx-40 md:mt-10 md:mb-6 md:pl-20 md:pr-20" onSubmit={handleSubmit}>
        <div className="mb-4 md:flex">
          <label className="block text-gray-700 text-lg md:w-full">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-solid rounded-lg"
            placeholder='First Name'
            required
          />
        </div>
        <div className="mb-4 md:flex">
          <label className="block text-gray-700 text-lg md:w-full">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder='Last Name'
            required
          />
        </div>
        <div className="mb-4 md:flex">
          <label className="block text-gray-700 text-lg md:w-full">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder='Email'
            required
          />
        </div>
        <div className="mb-4 md:flex">
          <label className="block text-gray-700 text-lg md:w-full">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-solid rounded-lg"
            placeholder='Phone'
            required
          />
        </div>
        <div className="mb-4 md:flex">
          <label className="block text-gray-700 text-lg md:w-full">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder='Role'
            required
          >
            <option value="" className='text-gray-700'>Select Role</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="mb-4 md:flex">
          <label className="block text-gray-700 text-lg md:w-full">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="" className='text-gray-700'>Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="mb-4 md:flex">
          <label className="block text-gray-700 text-lg md:w-full">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder='Password'
          />
        </div>
        <div className="mb-4 md:flex">
          <label className="block text-gray-700 text-lg md:w-full">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder='Confirm Password'
          />
        </div>
        <button
          type="submit"
          className="p-6 bg-[#641CC0] text-white text-pretty py-2 rounded-lg"
        >
          Save
        </button>
        <button
          type="button"
          className="p-6 bg-gray-500 text-white text-pretty py-2 rounded-lg ml-4"
          onClick={() => navigate('/tets-page')}
        >
          Cancel
        </button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default EditUserComponent;
