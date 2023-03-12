import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import MeeshoAds from "../../Images/Meesho_ads.png";
import Products from "../Products/Product";
import Footer from "../Footer/Footer";

export default function Home() {

  return (
    <div>
      <div style={{marginTop:'10rem'}}></div>
      <Container>
        <Container className="d-flex justify-content-center align-items-center">
          <img
            src={MeeshoAds}
            alt="Meesho Ads"
            height={350}
            style={{ marginTop: "3rem" }}
          />
        </Container>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            margin: "2rem"
          }}
        >
          <h2>Top Categories to choose from</h2>
        </div>
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <div className="backgroundImageHome">
              <img
                src="https://images.meesho.com/images/marketing/1649759774600.jpg"
                alt="Meesho Product"
              />
              <div className="womenWear">
                <img
                  src="https://images.meesho.com/images/marketing/1649760442043.webp"
                  height={429}
                  alt="Meesho Product"
                />
              </div>
              <div className="mensWear">
                <img
                  src="https://images.meesho.com/images/marketing/1649760423313.webp"
                  height={291}
                  alt="Meesho Product"
                />
              </div>
              <div className="kidsWear">
                <img
                  src="https://images.meesho.com/images/marketing/1649759799809.webp"
                  height={291}
                  alt="Meesho Product"
                />
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ marginTop: "3rem" }}
          >
            <div className="EssentialProduct">
              <div>
                <img
                  src="https://images.meesho.com/images/marketing/1664343269674.jpg"
                  alt="Meesho Product"
                />
                <div className="viewAll">
                  <img
                    src="https://images.meesho.com/images/marketing/1664368165450.webp"
                    height={60}
                    alt="Meesho Product"
                  />
                </div>
                <div className="beautyProduct">
                  <img
                    src="https://images.meesho.com/images/marketing/1649760808952.webp"
                    alt="Meesho Product"
                  />
                </div>
                <div className="beautyButton">
                  <img
                    src="https://images.meesho.com/images/marketing/1664364866805.webp"
                    alt="Meesho Product"
                  />
                </div>
                <div className="HomeProduct">
                  <img
                    src="https://images.meesho.com/images/marketing/1649760703179.webp"
                    alt="Meesho Product"
                  />
                </div>
                <div className="HomeButton">
                  <img
                    src="https://images.meesho.com/images/marketing/1664364917657.webp"
                    alt="Meesho Product"
                  />
                </div>
                <div className="ElectronicProduct">
                  <img
                    src="https://images.meesho.com/images/marketing/1649760786763.webp"
                    alt="Meesho Product"
                  />
                </div>
                <div className="ElectronicButton">
                  <img
                    src="https://images.meesho.com/images/marketing/1664364898513.webp"
                    alt="Meesho Product"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
      <div style={{marginBottom:"2rem"}}></div>
      <Products/>
      <Footer/>
    </div>
  );
}
