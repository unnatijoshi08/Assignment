import React from "react";
import "./UserWidgetComponent.css";

function UserWidgetComponent({ user }) {
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
      >
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
      </svg>
      </div>
    </div>
  );
}

export default UserWidgetComponent;
