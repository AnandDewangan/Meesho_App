import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (
    <div>
        <Container>
            <div className='fixed-bottom d-flex justify-content-center align-items-center footerStyle w-100'>
                <p>created by Anand Dewangan and working on processing...</p>
            </div>
        </Container>
    </div>
  )
}
