import React from "react";
import UserWidgetComponent from "./UserWidgetComponent";

function TestPage() {
  const user = {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8E25p14BClbGa-hcOMbll9zxxbErPmuSyXw&s",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    status: true,
  };

  return (
    <div>
      <h1>Test Page</h1>
      <UserWidgetComponent user={user} />
    </div>
  );
}

export default TestPage;
