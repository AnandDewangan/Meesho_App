import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FcSearch } from "react-icons/fc";
import { FaMobile } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import Badge from 'react-bootstrap/Badge';
import { Container } from "react-bootstrap";
import MeeshoContext from "../../Context/meeshoContext";

export default function Navbar() {
  const {number} = useContext(MeeshoContext);
  const listItems = [
    "Women Ethnic",
    "Women Western",
    "Men", "Kids",
    "Home & Kitchen",
    "Beauty & Health",
    "Jewellery & Accessories",
    "Bags & Footwear",
    "Electronics"
  ];

  return (
    <div>
      <div className="fixed-top navbarStyle">
        <div
          className="d-flex justify-content-evenly align-items-center flex-wrap">
          <div>
            <h2> <a href="/" style={{textDecoration:"none", fontFamily:"cursive", fontWeight:"bold", color:"#e84393", textShadow:"2px 1px 6px"}}>Meesho</a></h2>
          </div>
          <div className="searchBox">
            <span>
              <FcSearch />
            </span>
            <input
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Code"
              className="inputBox"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center gap-4 navbarDownload">
            <div
              className="d-flex justify-content-between gap-2 downloadApp" >
              <span>
                <FaMobile />
              </span>
              <a href="/notfound">Download App</a>
            </div>
            <div className="supplier">
              <a href="/notfound">Become a supplier</a>
            </div>
          </div>
          <div className="userDetails d-flex justify-content-between gap-4">
            <div className="profile">
              <div className="cgprofile">
              <span>
                <CgProfile />
              </span>
              <a href="/userProfile" style={{marginLeft:'5px'}} onMouseEnter={()=>{
                document.querySelector('.profileDetails').style.display = 'block';
              }} onMouseLeave={()=>{
                document.querySelector('.profileDetails').style.display = 'none';
              }}>Profile</a>
              </div>
              
              <div className="profileDetails">
                <h5 style={{color:"#e84393"}}>User Name</h5>
                <a href="/myorder" style={{color:"black", fontWeight:"500"}}>My Order</a>
                <hr />
                <a href="/logOut">Log Out</a>
              </div>
            </div>
            <div className="cardShopping">
              <span>
                <FiShoppingCart />
              </span>
              <a href="/notfound" style={{marginLeft:'5px'}}>Card</a>
              <Badge bg="success" id='number'>{number}</Badge>
            </div>
          </div>
        </div>
        <Container
          className="d-flex justify-content-between align-items-center gap-3 flex-wrap"
          style={{padding:'10px 0'}}
        >
          {listItems.map((item)=>{
            return <div className="listItem">{item}</div>
          })}
        </Container>
      </div>
    </div>
  );
}
