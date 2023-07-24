import React, { useState } from "react";

function Form({ formData, setFormData }) {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
  }

  return (
    <form>
      <input
        type="text"
        name="firstName"
        onChange={handleFirstNameChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleLastNameChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
