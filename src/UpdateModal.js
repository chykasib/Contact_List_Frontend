import React, { useState } from "react";

function EditContactModal({ contact, updateContact, onClose }) {
  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting updated contact:", updatedContact);
    updateContact(updatedContact); // Calls the update function
    onClose(); // Closes the modal
  };

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Contact</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={updatedContact.name}
                  onChange={(e) =>
                    setUpdatedContact({
                      ...updatedContact,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={updatedContact.phone}
                  onChange={(e) =>
                    setUpdatedContact({
                      ...updatedContact,
                      phone: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={updatedContact.email}
                  onChange={(e) =>
                    setUpdatedContact({
                      ...updatedContact,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={updatedContact.address}
                  onChange={(e) =>
                    setUpdatedContact({
                      ...updatedContact,
                      address: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={onClose}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditContactModal;
