import React, { useState } from "react";

function ContactItem({ contact, deleteContact, updateContact }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleSave = () => {
    updateContact(updatedContact);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedContact.name}
            onChange={(e) =>
              setUpdatedContact({ ...updatedContact, name: e.target.value })
            }
          />
          <input
            type="text"
            value={updatedContact.phone}
            onChange={(e) =>
              setUpdatedContact({ ...updatedContact, phone: e.target.value })
            }
          />
          <button onClick={handleSave} className="btn btn-success btn-sm">
            Save
          </button>
        </div>
      ) : (
        <div>
          <strong>{contact.name}</strong> ({contact.phone})
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-warning btn-sm"
          >
            Edit
          </button>
          <button
            onClick={() => deleteContact(contact._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default ContactItem;
