import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-dark shadow">
        <Container-fluid>
          <Navbar.Brand href="/" className='text-light'>
          <i class="fa-solid fa-utensils fa-xl fa-bounce me-3 ms-5"></i>
            Restorent
          </Navbar.Brand>
        </Container-fluid>
      </Navbar>
    </div>
  )
}

export default Header