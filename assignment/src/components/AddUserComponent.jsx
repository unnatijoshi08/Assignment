import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export const AddUserComponent = ({addUser}) => {
  const [newUser,setNewUser]= useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    status: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

const handleChange=(e)=>{
    const {name,value}=e.target;
    setNewUser({...newUser,[name]:value});
}
const handleSubmit=(e)=>{
    e.preventDefault();//To avoid page from refreshing
    addUser(newUser);
    toast.success("The user has been added successfully");
    navigate("/test-page")
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

        <div className="flex flex-1 justify-center w-full ">
        <form className="bg-white p-8 rounded-2xl  shadow-md w-full md:mx-40 md:mt-10 md:mb-6 md:pl-20 md:pr-20 " onSubmit={handleSubmit}>
        
          <div className="mb-4 md:flex ">
            <label className="block text-gray-700 text-lg md:w-full">First Name* </label>
            <input
              type="text"
              name="firstName"
              value={newUser.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid rounded-lg "
              placeholder='First Name'
              required
            />
          </div>
          <div className="mb-4 md:flex ">
            <label className="block text-gray-700  text-lg  md:w-full">Last Name* </label>
            <input
              type="text"
              name="lastName"
              value={newUser.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder='Last Name'
              required
            />
          </div>
          <div className="mb-4  md:flex ">
            <label className="block text-gray-700  text-lg md:w-full">Email</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder='Email'
              required
            />
          </div>
          <div className="mb-4 md:flex  ">
            <label className="block text-gray-700  text-lg md:w-full">Phone</label>
            <input
              type="text"
              name="phone"
              value={newUser.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-solid rounded-lg"
              placeholder='Phone'
              required
            />
          </div>
          <div className="mb-4 md:flex ">
            <label className="block text-gray-700  text-lg md:w-full">Role</label>
            <select
              name="role"
              value={newUser.role}
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
          <div className="mb-4 md:flex ">
            <label className="block text-gray-700  text-lg md:w-full" >Status</label>
            <select
              name="status"
              value={newUser.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="" className='text-gray-700'>Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="mb-4 md:flex ">
            <label className="block text-gray-700  text-lg md:w-full">Password</label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder='Password'
              required
            />
          </div>
          <div className="mb-4 md:flex ">
            <label className="block text-gray-700  text-lg md:w-full">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={newUser.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder='Confirm Password'
              required
            />
          </div>
          <button
            type="submit"
            className="p-6 bg-[#641CC0] text-white text-pretty py-2 rounded-lg"
          
          >
            Save
          </button>
        </form>
      </div>
      </div>
      </div>
      </div>
      
  )
}
export default AddUserComponent;