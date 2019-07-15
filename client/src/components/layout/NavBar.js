import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar bg='dark'>
        <Navbar.Brand href='/'>
          <i class='fas fa-fire' />
          {' HW Catalog'}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Signed in as: <a href='#login'>Casey</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
