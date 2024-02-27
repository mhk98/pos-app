import { Form, Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Users.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Users = () => {
  // State to manage additional fields
  const [additionalFields, setAdditionalFields] = useState([]);

  // Function to add new input field
  const addField = () => {
    setAdditionalFields([...additionalFields, { id: additionalFields.length }]);
  };
  return (
    <div className="users-container">
      <div className="user-content">
        <div>
          <p className="user mt-2">
            <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon> Steve Jobs
          </p>
        </div>
        <div>
          <a
            class="btn headers user users"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
          >
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
          </a>

          <div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Customer</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      {/* <label htmlFor="nameInput" className="form-label">
                        Name
                      </label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      {/* <label htmlFor="emailInput" className="form-label">
                        Email
                      </label> */}
                      <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      {/* <label htmlFor="phoneInput" className="form-label">
                        Phone
                      </label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="phoneInput"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="mb-3">
                      {/* <label htmlFor="currencyInput" className="form-label">
    Currency
  </label> */}
                      <div className="input-group">
                        <select
                          className="form-select"
                          aria-label="Select currency"
                        >
                          <option value="BDT">BDT</option>
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      {/* <label htmlFor="taxIdInput" className="form-label">
                        Tax ID
                      </label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="taxIdInput"
                        placeholder="Tax ID"
                      />
                    </div>
                    {/* Additional fields */}
                    {additionalFields.map((field) => (
                      <div className="mb-3" key={field.id}>
                        {/* <label
                          htmlFor={`additionalInput${field.id}`}
                          className="form-label"
                        >
                          Additional Field
                        </label> */}
                        <input
                          type="text"
                          className="form-control"
                          id={`additionalInput${field.id}`}
                          placeholder="Enter additional value"
                        />
                      </div>
                    ))}
                    <div className="text-center mb-3">
                      <button
                        type="button"
                        className="btn "
                        style={{
                          color: "#5C6AC4",
                          border: "1px solid #5C6AC4",
                        }}
                        onClick={addField}
                      >
                        Add More Details
                      </button>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: "#5C6AC4", color: "white" }}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cart></Cart>
    </div>
  );
};

export default Users;
