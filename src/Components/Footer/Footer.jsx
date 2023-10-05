import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  '../Footer/Footer.css'

function Footer() {
  return (
    <div className='footer'>
       {/* <Navbar className="bg-dark shadow">
        <Container className='footer'>
          
         <p style={{textAlign:'center'}} >All Rights are Resrved</p>
         
        </Container>
      </Navbar> */}
        <p>© 2020 Copyright:Restaurant.com</p>
   
    </div>
  )
}

export default Footer