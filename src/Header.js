import React, { useState } from "react";
import { Nav, Modal, Form, Button } from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownAZ,
  faBars,
  faDashboard,
  faFileInvoiceDollar,
  faGear,
  faLocationDot,
  faPenToSquare,
  faPlusCircle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import goBilling from "./image/goBilling.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);

  const toggleContent1 = () => {
    setShowContent1(!showContent1);
    setShowContent2(false); // Hide content of button 2 when button 1 is clicked
  };

  const toggleContent2 = () => {
    setShowContent2(!showContent2);
    setShowContent1(false); // Hide content of button 1 when button 2 is clicked
  };

  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className=" mt-2 ">
      {/* <div className="">
        <button
          className="btn bg-white headers border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div> */}
      <div className="header-cont">
        <Nav.Link className=" " href="#action1">
          <span
            className="ms-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <FontAwesomeIcon icon={faBars} />
          </span>
          <div
            className="offcanvas offcanvas-start dropsection"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <div>
                <img src={goBilling} alt="" />
                <p className="text-start">
                  <small>Location:</small>
                </p>
                <h5>Los Angeles, California</h5>
              </div>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body text-start bg-white">
              <div className="d-flex align-items-center btn-color mt-2">
                <h5>
                  <FontAwesomeIcon icon={faDashboard} />
                </h5>
                <h5>
                  <Nav.Link className="ms-3" as={Link} to="about">
                    Dashboard
                  </Nav.Link>
                </h5>
              </div>
              <div className="d-flex align-items-center location-btn mt-2">
                <h5>
                  <FontAwesomeIcon icon={faLocationDot} />
                </h5>
                <h5>
                  <Nav.Link className="ms-3" as={Link} to="about">
                    Locations
                  </Nav.Link>
                </h5>
              </div>
              <div className="d-flex align-items-center btn-color mt-2">
                <h5>
                  <FontAwesomeIcon icon={faFileInvoiceDollar} />
                </h5>
                <h5>
                  <Nav.Link className="ms-3" as={Link} to="about">
                    Pos Invoices
                  </Nav.Link>
                </h5>
              </div>
              <div className="d-flex align-items-center btn-color ">
                <h5>
                  <FontAwesomeIcon className="bg-white" icon={faGear} />
                </h5>
                <h5>
                  <Nav.Link className=" ms-3" onClick={handleShow}>
                    Settings
                  </Nav.Link>
                  {/* <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button> */}
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className="mx-auto">Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="mx-auto">
                      <button
                        style={{ border: "none", fontSize: "30px" }}
                        className={activeButton === "button1" ? "active" : ""}
                        onClick={() => handleClick("button1")}
                      >
                        Tax On
                      </button>
                      <button
                        style={{ border: "none", fontSize: "30px" }}
                        className={activeButton === "button2" ? "active" : ""}
                        onClick={() => handleClick("button2")}
                      >
                        Tax Type
                      </button>

                      {/* Content for Button 1 */}
                      {activeButton === "button1" && (
                        <div>
                          <input
                            type="radio"
                            id="afterDiscount"
                            name="discountType"
                            value="after"
                          />
                          <label htmlFor="afterDiscount">After Discount</label>
                          <br />

                          <input
                            type="radio"
                            id="beforeDiscount"
                            name="discountType"
                            value="before"
                          />
                          <label htmlFor="beforeDiscount">
                            Before Discount
                          </label>
                        </div>
                      )}

                      {/* Content for Button 2 */}
                      {activeButton === "button2" && (
                        <div className="mb-3 mt-3">
                          {/* <label htmlFor="currencyInput" className="form-label">
     Currency
   </label> */}
                          <div className="input-group">
                            <select
                              className="form-select"
                              aria-label="Select currency"
                            >
                              <option value="BDT">Income tax</option>
                              <option value="USD">Property taxes</option>
                              <option value="EUR">Payroll taxes</option>
                              <option value="GBP">Sales tax</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </Modal.Body>
                  </Modal>
                </h5>
              </div>
            </div>
          </div>
        </Nav.Link>

        <Nav.Link className="headers " href="#action1">
          <FontAwesomeIcon icon={faPenToSquare} />{" "}
          <span className="ms-2">Note</span>
        </Nav.Link>
        <Nav.Link className="headers btn" href="#action2">
          <FontAwesomeIcon className="" icon={faTruck} />{" "}
          <span className="ms-2">Shipping</span>
        </Nav.Link>
        <Nav.Link className="headers btn" href="#action2">
          <FontAwesomeIcon icon={faArrowDownAZ} />{" "}
          <span className="ms-2">Hold Orders</span>
        </Nav.Link>
        <Nav.Link className="headers btn" href="#action2">
          <FontAwesomeIcon icon={faPlusCircle} />{" "}
          <span className="ms-2">New Item</span>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Header;
