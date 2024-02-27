import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Product.css";
import {
  useCreateCartMutation,
  useGetAllCartQuery,
} from "../feature/cart/cart";
import { toast } from "react-toastify";

const Product = ({ product, handleAddToCart }) => {
  console.log(product);
  const { img, name, price, description } = product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, isLoading, isError, error } = useGetAllCartQuery();
  const [cart, setCart] = useState([]);

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

  const [createCart] = useCreateCartMutation();

  const addToCart = async (product) => {
    if (cart.some((item) => item.Cart_Id === product.id)) {
      alert("This product is already in the cart.");
    } else {
      const data = {
        title: product.name,
        price: product.price,
      };
      console.log("cart data here", product);
      const res = await createCart(data);

      // Show a success toast message to indicate that the product has been added
      if (res.status === "Success") {
        toast.success("Product added to the cart");
      }
    }
  };
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={img} width={80} height={140} />
        <Card.Body>
          <h6 className="price text-bold">Price:{price}</h6>
          <Card.Text
            onClick={handleShow}
            className="product-name"
            style={{ cursor: "pointer" }}
          >
            {name}
          </Card.Text>
          {/* <p onClick={() => handleAddToCart(product)} className="w-100">
            {name}
          </p> */}
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="mx-auto">Selected Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="row ">
          <div className="col-lg-6">
            <img src={img} width={120} height={140} alt="" />
            <p>{description}</p>
          </div>
          <div className="col-lg-6 mt-5">
            <span style={{ fontWeight: "bold" }}>{name}</span>

            <p className="mt-3" style={{ fontWeight: "bold" }}>
              {price}$
            </p>

            <button
              onClick={() => addToCart(product)}
              style={{ border: "1px solid black", width: "100%" }}
              className="btn "
            >
              Add To Cart
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Product;
