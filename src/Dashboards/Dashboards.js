import React, { useState } from "react";
import "./Dashboards.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
// import Products from '../Home/Products';
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import search from "../image/search.png";
import Products from "../Home/Products";
import Users from "../Home/Users";
import Cart from "../Cart";

const Dashboards = () => {
  return (
    <div className="row">
      <div className="col-lg-5">
        <Header></Header>
        <Users></Users>

        {/* <Cart></Cart> */}
      </div>
      <div className="col-lg-7 col-md-12 col-sm-12">
        <div>
          <Form className="shadow-sm p-3 mb-5 bg-white rounded search-form">
            <FontAwesomeIcon
              className="search"
              icon={faSearch}
            ></FontAwesomeIcon>
            <FormControl
              type="search"
              placeholder="Search Products..."
              className="me-2 "
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
            <img src={search} alt="" />
          </Form>
        </div>
        <div className=" menu ">
          <div>
            <button
              class="btn btn-white text-secondary border border-secondary space category"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              AllCategories
            </button>

            <div
              class="offcanvas  offcanvas-end w-50  "
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header mx-auto ">
                <h3 id="offcanvasRightLabel">Categories</h3>
                <button
                  type="button"
                  class="btn-close text-reset me-2 position-absolute top-0  end-100"
                  style={{ fontSize: "25px", color: "#FFFFFF" }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="     offcanvas-body ">
                <div>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="btn btn-white text-secondary border border-secondary space category"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Electronics
            </button>

            <div
              class="offcanvas  offcanvas-end w-50  "
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header mx-auto">
                <h3 className="text-center" id="offcanvasRightLabel">
                  Categories
                </h3>
                <button
                  type="button"
                  class="btn-close text-reset text-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="     offcanvas-body ">
                <div>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="btn btn-white text-secondary border border-secondary space category"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Home & Lifestyle
            </button>

            <div
              class="offcanvas  offcanvas-end w-50  "
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header mx-auto">
                <h3 id="offcanvasRightLabel">Categories</h3>
                <button
                  type="button"
                  class="btn-close text-reset text-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="     offcanvas-body ">
                <div>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="btn btn-white text-secondary border border-secondary space category"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Men Fashion
            </button>

            <div
              class="offcanvas  offcanvas-end w-50   eachmenu"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header mx-auto">
                <h3 id="offcanvasRightLabel">Categories</h3>
                <button
                  type="button"
                  class="btn-close text-reset text-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="     offcanvas-body ">
                <div>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="btn btn-white text-secondary border border-secondary space category"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Women Fashions
            </button>

            <div
              class="offcanvas  offcanvas-end w-50  "
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header mx-auto">
                <h3 id="offcanvasRightLabel">Categories</h3>
                <button
                  type="button"
                  class="btn-close text-reset text-white text-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="     offcanvas-body ">
                <div>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="btn btn-white text-secondary border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <h3>
                <FontAwesomeIcon
                  className="mb-5 me-20"
                  icon={faEllipsisVertical}
                ></FontAwesomeIcon>
              </h3>
            </button>

            <div
              class="offcanvas  offcanvas-end  "
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header mx-auto">
                <h3 id="offcanvasRightLabel">Categories</h3>
                <button
                  type="button"
                  class="btn-close text-reset text-white text-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="     offcanvas-body ">
                <div>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    AllCategories
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Home & Lifestyle
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Electronics
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Toys
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Women Fashions
                  </a>
                  <a
                    class="btn btn-white text-secondary border border-secondary space category"
                    href="#"
                    role="button"
                  >
                    Men Fashion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products></Products>
      </div>
    </div>
  );
};

export default Dashboards;
