import React, { useState } from "react";

function AddContact({ addContact }) {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({ name: "", phone: "", email: "", address: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          value={contact.address}
          onChange={(e) => setContact({ ...contact, address: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Contact
      </button>
    </form>
  );
}

export default AddContact;
