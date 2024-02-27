import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useDeleteCartMutation,
  useGetAllCartQuery,
  useUpdateCartMutation,
} from "../feature/cart/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faHand,
  faHandHoldingDollar,
  faHeadSideCough,
  faRemove,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const Cart = () => {
  const { data, isLoading, isError, error } = useGetAllCartQuery();

  const [cart, setCart] = useState([]);

  console.log("cart", cart);

  useEffect(() => {
    if (isError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching cart data:", error);
    } else if (!isLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data && data.data) {
        setCart(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  // Function to update the cart item quantity and update local storage
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.Cart_Id === id) {
          // Update the quantity of the specific item
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );

    // Recalculate and update the subtotal, discount, and total
    const updatedSubtotal = calculateTotal();

    const updatedDiscount = appliedDiscount; // You might need to recalculate the discount based on the updated cart.
    const updatedTotal = updatedSubtotal - updatedDiscount;
    setCartTotal(updatedTotal);

    // Update the local storage with the new cart data after changing the state
    const updatedCart = JSON.stringify(cart);
    localStorage.setItem("cart", updatedCart);
  };

  // Function to calculate the subtotal of an item
  const calculateSubtotal = (price, quantity) => price * quantity;

  // Function to calculate the total cart price
  const calculateTotal = () =>
    cart.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );

  const [deleteCart] = useDeleteCartMutation();
  const handleDelete = async (id) => {
    if (id) {
      if (window.confirm("Do you want to delete?")) {
        // First, update the state by filtering the item

        console.log("productId", id);
        const res = await deleteCart(id);

        if (res.status === "Success") {
          toast.success("Successfully delete product from cart");
        }
        const updatedCart = cart.filter((item) => item.Cart_Id !== id);
        setCart(updatedCart);

        // Recalculate and update the subtotal, discount, and total
        const updatedSubtotal = calculateTotal();
        const updatedDiscount = appliedDiscount; // You might need to recalculate the discount based on the updated cart.
        const updatedTotal = updatedSubtotal - updatedDiscount;
        setCartTotal(updatedTotal);

        // Update the local storage with the new cart data after removing the item
        const updatedCartJSON = JSON.stringify(updatedCart);
        localStorage.setItem("cart", updatedCartJSON);
      }
    }
  };

  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(10);
  const [cartTotal, setCartTotal] = useState(calculateTotal());

  // Function to handle changes in the coupon code input field
  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  // Function to apply the coupon and calculate the discount
  const applyCoupon = () => {
    // You can add logic here to validate the coupon code and calculate the discount.
    // For this example, we'll apply a fixed 20% discount if the coupon is "OCT".

    if (couponCode === "OCT20") {
      const totalBeforeDiscount = calculateTotal();
      const discount = (totalBeforeDiscount * 20) / 100; // 20% discount
      const discountedTotal = totalBeforeDiscount - discount;

      setAppliedDiscount(discount);
      setCartTotal(discountedTotal);
    }
  };

  const handleProceedToCheckout = () => {
    // Calculate the subtotal and total one more time
    const subtotal = calculateTotal();
    const total = subtotal - appliedDiscount;

    // Store the values in localStorage
    localStorage.setItem("subtotal", subtotal.toFixed(2));
    localStorage.setItem("total", total.toFixed(2));

    // router.push("/dark/shop-checkout/", { scroll: false });
  };

  const handleCreateOrder = async () => {
    const subtotal = calculateTotal();
    const total = subtotal - appliedDiscount;
    const data = {
      orderDetails: cart,
      subtotal: subtotal.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const tax = 25.5;
  const shipping = 5.5;

  const [updateId, setUpdateId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateId = (item) => {
    setProduct(item);
    setUpdateId(item.Cart_Id);
  };

  const [updateCart] = useUpdateCartMutation();
  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = {
      title: name,
      price: price,
    };

    const res = await updateCart({ id: updateId, data: data });

    if (res.status === "Success") {
      toast.success("Successfully update cart info");
    }
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <table className="table">
                  <thead>
                    {/* <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Action</th>
                    </tr> */}
                  </thead>
                  <tbody>
                    {cart?.map((item) => (
                      <tr key={item.Cart_Id}>
                        <td>
                          <FontAwesomeIcon
                            className="cart-cont"
                            style={{ color: "#84919C", cursor: "pointer" }}
                            onClick={() => {
                              handleShow();
                              handleUpdateId(item);
                            }}
                            icon={faEdit}
                          />
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title className="mx-auto">
                                Please update product info
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="mx-auto">
                              {/* Content for Button 1 */}

                              <div className="container">
                                <form onSubmit={handleUpdate}>
                                  <div className="input-container">
                                    <label htmlFor="input1">Name:</label>
                                    <input
                                      type="text"
                                      id="input1"
                                      defaultValue={product.title}
                                      onChange={(e) => setName(e.target.value)}
                                      className="input-field"
                                    />
                                  </div>
                                  <div className="input-container">
                                    <label htmlFor="input2">Price:</label>
                                    <input
                                      type="text"
                                      id="input2"
                                      defaultValue={product.price}
                                      onChange={(e) => setPrice(e.target.value)}
                                      className="input-field"
                                    />
                                  </div>

                                  <button
                                    type="submit"
                                    className="btn"
                                    style={{
                                      backgroundColor: "#5C6AC4",
                                      color: "white",
                                    }}
                                  >
                                    Update
                                  </button>
                                </form>
                              </div>
                            </Modal.Body>
                          </Modal>
                        </td>
                        <td>
                          <h5
                            style={{ color: "#84919C" }}
                            className="cart-cont fz-18"
                          >
                            {item.title}
                          </h5>
                        </td>
                        <td>
                          <h5
                            style={{ color: "#84919C" }}
                            className="cart-cont fz-18"
                          >
                            ${item.price}
                          </h5>
                        </td>
                        <td>
                          <div className="counter ">
                            <span
                              className="down me-1"
                              style={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                cursor: "pointer",
                                color: "#84919C",
                              }}
                              onClick={() =>
                                updateQuantity(item.Cart_Id, item.quantity - 1)
                              }
                            >
                              -
                            </span>
                            <input
                              style={{
                                width: "20px",
                                color: "#84919C",
                                border: "1px solid #84919C",
                              }}
                              type="text"
                              value={item.quantity}
                              readOnly
                            />
                            <span
                              className="up ms-1"
                              style={{
                                fontWeight: "bold",
                                cursor: "pointer",
                                color: "#84919C",
                              }}
                              onClick={() =>
                                updateQuantity(item.Cart_Id, item.quantity + 1)
                              }
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <h5
                            style={{ color: "#84919C" }}
                            className="cart-cont fz-18"
                          >
                            $
                            {calculateSubtotal(
                              item.price,
                              item.quantity
                            ).toFixed(2)}
                          </h5>
                        </td>
                        <td className="remove">
                          <button
                            style={{
                              color: "red",
                              backgroundColor: "white",
                            }}
                            className="btn btn-danger"
                            onClick={() => handleDelete(item.Cart_Id)}
                          >
                            <FontAwesomeIcon
                              className="cart-cont"
                              icon={faTrash}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row mt-80">
                <div className="col-lg-6">
                  {/* <div className="mt-40 coupon">
                    <h4>Discount</h4>
                    <p className="fz-13">
                      Enter your coupon code if you have one.
                    </p>
                    <form action="contact.php">
                      <div className="form-group d-flex mt-30">
                        <input
                          type="text"
                          name="coupon_code"
                          value={couponCode}
                          onChange={handleCouponCodeChange}
                          className="form-control"
                        />
                        <button
                          type="button"
                          className="btn btn-primary ms-2"
                          onClick={applyCoupon}
                        >
                          Apply
                        </button>
                      </div>
                      <span className="mt-10 fz-13 opacity-7">Coupon code</span>
                    </form>
                  </div> */}
                </div>
                <div
                  className=" col-lg-4 offset-lg-2"
                  style={{ backgroundColor: "#fff" }}
                >
                  {cart && cart.length > 0 && (
                    <div className="mt-40 ">
                      {/* <h4 style={{ color: "#5C6AC4" }}>Cart totals</h4> */}
                      <ul className="rest mt-30">
                        <li className="mb-2">
                          <h6 style={{ textAlign: "left", color: "#84919C" }}>
                            Subtotal
                            <span className="ms-2 fz-16 ">
                              ${calculateTotal().toFixed(2)}
                            </span>
                          </h6>
                        </li>
                        <li className="mb-2">
                          <h6 style={{ textAlign: "left", color: "#84919C" }}>
                            Tax
                            <span className=" fz-16 ">-${tax.toFixed(2)}</span>
                          </h6>
                        </li>
                        <li className="mb-2">
                          <h6 style={{ textAlign: "left", color: "#84919C" }}>
                            Shipping
                            <span className=" fz-16 ">
                              -${shipping.toFixed(2)}
                            </span>
                          </h6>
                        </li>
                        <li className="mb-2">
                          <h6 style={{ textAlign: "left", color: "#3674D9" }}>
                            Discount on Cart
                            <span className=" fz-16 ">
                              -${appliedDiscount.toFixed(2)}
                            </span>
                          </h6>
                        </li>
                      </ul>

                      {/* <button
                        onClick={handleCreateOrder}
                        className="btn btn-primary mt-3"
                      >
                        <Link
                          to="/dark/shop-checkout/"
                          className="text-uppercase fz-13 fw-600 text-white"
                        >
                          Proceed to checkout
                        </Link>
                      </button> */}
                    </div>
                  )}
                </div>

                <div
                  className="mb-2 row justify-content-between"
                  style={{ backgroundColor: "#E1EAF9", padding: "10px" }}
                >
                  <h6
                    className="col-lg-6 mt-2"
                    style={{ textAlign: "left", color: "#3674D9" }}
                  >
                    Products Count
                    <span className="ms-2 fz-16 ">({cart.length})</span>
                  </h6>
                  <h6
                    className="col-lg-3"
                    style={{
                      textAlign: "left",
                      color: "#3674D9",
                      fontSize: "25px",
                    }}
                  >
                    Total
                    <span className="ms-2 fz-16 ">
                      $
                      {(calculateTotal() - appliedDiscount).toFixed(2) -
                        tax.toFixed(2) -
                        shipping.toFixed(2)}
                    </span>
                  </h6>
                </div>

                <div className="payment-icon">
                  <div
                    style={{
                      color: "#E55C57",
                      backgroundColor: "#FADEDD",
                      padding: "5px",
                    }}
                  >
                    <FontAwesomeIcon
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        borderRadius: "50%",
                        border: "1px solid #E55C57",
                        padding: "3px", // Add padding for better appearance
                      }}
                      icon={faRemove}
                    />

                    <span
                      className="ms-3"
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Cancel
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#3674D9",
                      backgroundColor: "#DEE1F3",
                      padding: "5px",
                    }}
                  >
                    <FontAwesomeIcon
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        borderRadius: "50%",
                        border: "1px solid #3674D9",
                        padding: "3px", // Add padding for better appearance
                      }}
                      icon={faHand}
                    />

                    <span
                      className="ms-3"
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Hold
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#3674D9",
                      backgroundColor: "#DEE1F3",
                      padding: "5px",
                    }}
                  >
                    <FontAwesomeIcon
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        borderRadius: "50%",
                        border: "1px solid #3674D9",
                        padding: "3px", // Add padding for better appearance
                      }}
                      icon={faHeadSideCough}
                    />

                    <span
                      className="ms-3"
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Discount
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#3674D9",
                      backgroundColor: "#DEE1F3",
                      padding: "5px",
                    }}
                  >
                    <FontAwesomeIcon
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        borderRadius: "50%",
                        border: "1px solid #3674D9",
                        padding: "3px", // Add padding for better appearance
                      }}
                      icon={faHandHoldingDollar}
                    />

                    <span
                      className="ms-3"
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Pay Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
