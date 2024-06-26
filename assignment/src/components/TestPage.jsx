import "./tailwind.css";
import React, { useState } from "react";
import UserListComponent from "./UserListComponent";

import EditUserComponent from "./EditUserComponent";

import Sidebar from "./Sidebar";
import { initialUsers } from "../store";
import Header from "./Header";
import ListViewIcon from "../assets/ListViewIcon";
import GridViewIcon from "../assets/GridViewIcon";
import UserGridView from "./UserGridView"
import { useNavigate } from "react-router-dom";
import AddUserComponent from "./AddUserComponent";

const TestPage = ({ addUser, users, setIsGridView, isGridView,deleteUser }) => {
 
  const navigate= useNavigate();

  return (
    <div className="w-screen h-screen border flex lg:flex-row">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <Header />
        <div className="bg-[#F9F9F9] p-4 mt-4">
          <div className="w-full flex justify-between items-center  font-semibold">
            <div className="ml-6 text-xl">Users</div>
            <div className="flex items-center">
              <button
                className={`border-[4px] p-2 shadow-lg flex items-center rounded-md ${isGridView ? 'bg-white border-white ' : 'bg-[#641CC0] border-[#641CC0]'}`}
                onClick={() => setIsGridView(false)}
              >
                <ListViewIcon className={`${isGridView ? 'text-[#641CC0]' : 'text-white'}`} />
              </button>
              <button
                className={`border-[4px] p-2 shadow-lg flex items-center rounded-md ${isGridView ? 'bg-[#641CC0] border-[#641CC0]' : 'bg-white border-white'}`}
                onClick={() => setIsGridView(true)}
              >
                <GridViewIcon className={`${isGridView ? 'text-white' : 'text-[#641CC0]'}`} />
              </button>
              <div className="mx-4">
                <button
                  className="border-[4px] p-2 border-[#641CC0] bg-[#641CC0] shadow-lg text-white rounded-md text-[14px]"
                  onClick={() => navigate('/add-user')}
                >
                  <span className="md:hidden mx-2">+ Add</span>
                  <span className="hidden md:inline">+ Add User</span>
                </button>
              </div>
            </div>
          </div>
          
        
          {isGridView ? <UserGridView users={users} deleteUser={deleteUser}/> : <UserListComponent users={users} deleteUser={deleteUser}/>}
        
        </div>
        
      </div>
    </div>
  );
};

export default TestPage