import React from 'react'
import { Container } from 'react-bootstrap'
import NotFoundImage1 from '../../Images/404-error.png'
import Footer from '../Footer/Footer'

export default function NotFound() {
  return (
    <div>
      <div style={{marginTop:"10rem"}}></div>
      <Container>
        <h1 style={{textAlign:"center", color:"#e84393", fontFamily:"cursive", textShadow:"1px 2px 5px #e84393"}}>Page Not Found</h1>
        <div className='d-flex justify-content-center align-items-center'>
          <img src={NotFoundImage1} alt="Page Not Found" width="50%"/>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}
