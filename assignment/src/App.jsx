import { useState } from "react";
import TestPage from "./components/TestPage";
import UserWidgetComponent from "./components/UserWidgetComponent";
import { initialUsers } from "./store";
import UserGridView from "./components/UserGridView";

import EditUserComponent from "./components/EditUserComponent";

import AddUserComponent from "./components/AddUserComponent";

import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./components/Dashboard";

import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { useLocation } from "react-router-dom";
import { ForgotPassword } from "./components/ForgetPassword";
import { ResetPassword } from "./components/ResetPassword";
import { SuccessPassword } from "./components/SuccessPassword";
import UserSignIn from "./components/UserSignIn";
import UserSignup from "./components/UserSignup";
import { useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState(() => {
    // Retrieve users from localStorage if available, else use initialUsers
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : initialUsers;
  });
  const [isGridView, setIsGridView] = useState(true);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    console.log("users ", users);
  }, [users]);

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
    location.pathname == "/sign-up"
      ? toast.success("Sign-up successfull")
      : toast.success("The user has been added successfully");
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    toast.info("The user has been deleted successfully");
  };

  return (
    <AuthProvider>
      <ToastContainer />
      <Routes>
        <Route
          path="/test-page"
          element={
            <ProtectedRoute>
              <TestPage
                addUser={addUser}
                users={users}
                setIsGridView={setIsGridView}
                isGridView={isGridView}
                deleteUser={deleteUser}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-user"
          element={
            <ProtectedRoute>
              <AddUserComponent addUser={addUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditUserComponent users={users} updateUser={updateUser} />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<UserSignIn users={users} />} />
        <Route path="/sign-up" element={<UserSignup addUser={addUser} />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword users={users} />}
        />
        <Route
          path="/reset-password/:id"
          element={<ResetPassword users={users} updateUser={updateUser} />}
        />
        <Route path="/success-password" element={<SuccessPassword />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
