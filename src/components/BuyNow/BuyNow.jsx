import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import MeeshoContext from "../../Context/meeshoContext";
import "./BuyNow.css";

export default function BuyNow() {
  return (
    <>
      <div className="buyBackground">
        <Container className="d-flex justify-content-between align-items-center">
          <div>
            <div style={{ marginTop: "10rem" }}></div>
            <h5>Select Delivery Address</h5>
            <div className="consumerDetails">
              <h3>User Name</h3>
              <h5>Address</h5>
              <hr />
              <Button variant="dark">Deliver to this Address</Button>
            </div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center gap-4"
            style={{ marginTop: "10rem" }}
          >
            <div className="productDetails">
              <h5>Price Details</h5>
              <h5>Total Product Price</h5>
              <hr />
              <h5>Order Total</h5>
            </div>
            <div>
              <div className="productValues">
                <h5>1000</h5>
                <h5>1000</h5>
                <hr />
                <h5>1000</h5>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
