import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import MeeshoContext from "../../Context/meeshoContext";
import "./Product.css";

export default function () {
  const subreddits = [
    "Meesho Mall",
    "Mens Wear",
    "Women Wear",
    "Kids Wear",
    "Low Price",
    "High Price",
    "Kurta Fabric",
    "Dupatta Color",
    "Discount",
    "Rating",
    "Combo",
    "Material",
    "Watches",
    "Fancy",
    "Fancy Wearing",
    "Formal Shoes",
    "T-Shirt",
    "Sunglasses",
    "Bags",
    "Headphones",
  ];
  const {number, setNumber} = useContext(MeeshoContext);
  const [items, setItems] = useState(null);

  const data = async () => {
    const response = await fetch("https://fakestoreapi.com/products?sort=desc");
    const result = await response.json();
    console.log(result);
    setItems(result);
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <Container>
        <h3>Products For You</h3>
        <Container>
          <aside style={{ position: "relative" }}>
            <div className="sidenav">
              <div className="sidenav__logo">
                <h2
                  style={{
                    fontFamily: "cursive",
                    fontWeight: "bold",
                    color: "#e84393",
                    textShadow: "2px 1px 6px #ff6b81"
                  }}
                >
                  Meesho
                </h2>
              </div>
              <div>
                <ul className="sidenav">
                  {subreddits.map((subreddit) => {
                    return (
                      <div className="sideNav_text">
                          <a>
                            {subreddit}
                          </a>
                        <Form.Check type="switch" id="custom-switch" />
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
            <main>
              <div className="mainSection">
                {items ? (
                  items.map((item) => {
                    return (
                      <div key={item.id} className="itemProduct">
                        <Container>
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src={item.image}
                              className="itemImage"
                              style={{ padding: "1rem" }}
                            />
                          </div>

                          <h4
                            style={{
                              textShadow: "2px 1px 3px #686de0",
                              color: "#4834d4",
                            }}
                          >
                            {item.title}
                          </h4>
                          <p style={{ fontSize: "1rem" }}>{item.description}</p>
                          <h3
                            style={{
                              fontSize: "2.5rem",
                              textShadow: "2px 1px 3px #686de0",
                              color: "#535c68",
                            }}
                          >
                            $ {item.price}
                          </h3>
                          {item.rating.rate > 3 ? (
                            <div>
                              <h5 className="good rating">
                                {item.rating.rate} ⭐
                              </h5>
                              <p style={{textShadow:"1px 1px 2px grey", color:'gray', fontWeight:"600"}}>{item.rating.count} Reviews</p>
                            </div>
                          ) : (
                            <div>
                              <h5 className="poor rating">
                                {item.rating.rate} ⭐
                              </h5>
                              <p style={{textShadow:"1px 1px 2px grey", color:'gray', fontWeight:"600"}}>{item.rating.count} Reviews</p>
                            </div>
                          )}
                        </Container>
                        <Button className="buttonBuyNow" variant="success">
                          <a href="/buynow" style={{textDecoration:"none", color:"white"}}>Buy Now</a>
                        </Button>
                        <Button className="buttonAddcard" variant="warning" onClick={()=>setNumber(number+1)}>
                          Add card
                        </Button>
                      </div>
                    );
                  })
                ) : (
                  <h2>Not Found</h2>
                )}
              </div>
            </main>
          </aside>
        </Container>
      </Container>
    </div>
  );
}
