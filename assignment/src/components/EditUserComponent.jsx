import "./tailwind.css";
import React, { useState, useEffect } from "react";

const EditUserComponent = ({ user, onEdit }) => {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(formData);
  };

  return (
    <form
      className="flex flex-col gap-4 p-4 border rounded"
      onSubmit={handleSubmit}
    >
      <input
        className="p-2 border rounded"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        className="p-2 border rounded"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        className="p-2 border rounded"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        className="p-2 border rounded"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        className="p-2 border rounded"
        type="text"
        name="role"
        value={formData.role}
        onChange={handleChange}
        placeholder="Role"
        required
      />
      <button type="submit">Edit User</button>
    </form>
  );
};

export default EditUserComponent;
