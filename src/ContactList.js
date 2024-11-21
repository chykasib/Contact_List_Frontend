import { useState } from "react";
import EditContactModal from "./UpdateModal";

function ContactList({ contacts, deleteContact, updateContact }) {
  const [editContact, setEditContact] = useState(null);

  return (
    <ul className="list-group">
      {contacts.map((contact) => (
        <li key={contact._id} className="list-group-item">
          <strong>{contact.name}</strong> - {contact.phone} - {contact.email} -{" "}
          {contact.address}
          <div className="mt-2">
            <button
              className="btn btn-primary me-2"
              onClick={() => setEditContact(contact)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteContact(contact._id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
      {editContact && (
        <EditContactModal
          contact={editContact}
          updateContact={updateContact}
          onClose={() => setEditContact(null)}
        />
      )}
    </ul>
  );
}

export default ContactList;
