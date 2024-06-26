import { useState } from "react";
import TestPage from "./components/TestPage";
import UserWidgetComponent from "./components/UserWidgetComponent";
import { initialUsers } from "./store";
import UserGridView from "./components/UserGridView";

import EditUserComponent from "./components/EditUserComponent";

import AddUserComponent from "./components/AddUserComponent";

import { Route, Routes } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [isGridView, setIsGridView] = useState(true);

  const addUser = (newUser) => {
    setUsers([
      ...users,
      {
        ...newUser,
        id: users.length + 1,
        photo: "https://via.placeholder.com/100",
        createdDate: new Date().toISOString().split("T")[0],
        lastLogin: new Date().toISOString().split("T")[0],
      },
    ]);
    alert("The user has been added successfully");
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    alert("The user has been updated successfully");
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    alert('The user has been deleted successfully');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <TestPage
            addUser={addUser}
            users={users}
            setIsGridView={setIsGridView}
            isGridView={isGridView}
            deleteUser = {deleteUser}
          />
        }
      />
      
      <Route
        path="/add-user"
        element={<AddUserComponent addUser={addUser} />}
      />
      <Route
        path="/edit/:id"
        element={<EditUserComponent users={users} updateUser={updateUser} />}
      />
      
  
    
    </Routes>
  );
};

export default App;
