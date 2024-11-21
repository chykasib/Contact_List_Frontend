import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/contactInfo`)
      .then((response) => {
        console.log("Contacts fetched:", response.data.data);
        setContacts(response.data.data); // Ensure the response is an array
      })
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  // Add contact
  const addContact = (newContact) => {
    axios
      .post(
        `http://localhost:5000/api/v1/contactInfo/create-contactInfo`,
        newContact
      )
      .then((response) => {
        console.log("Contact added:", response.data);
        setContacts([...contacts, response.data.data]); // Add the new contact to the list
      })
      .catch((error) => console.error("Error adding contact:", error));
  };

  // Update contact
  const updateContact = (updatedContact) => {
    console.log("Updating contact:", updatedContact);
    axios
      .patch(
        `http://localhost:5000/api/v1/contactInfo/${updatedContact._id}`,
        updatedContact
      )
      .then((response) => {
        console.log("Updated contact:", response.data.data);
        setContacts((prevContacts) =>
          prevContacts.map((contact) =>
            contact._id === updatedContact._id ? response.data.data : contact
          )
        );
      })
      .catch((error) => console.error("Error updating contact:", error));
  };

  // Delete contact
  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/contactInfo/${id}`)
      .then(() => {
        console.log(`Contact with id ${id} deleted`);
        setContacts(contacts.filter((contact) => contact._id !== id));
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };

  return (
    <div className="container mt-5">
      <h2>Contact Management</h2>
      <AddContact addContact={addContact} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        updateContact={updateContact}
      />
    </div>
  );
}

export default App;
