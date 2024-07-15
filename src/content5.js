import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './image/human.jpeg';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
// import master from './Home/listData';



// console.log('master', master);
const Content5 = ({ title, children, firstnames, lastnames }) => {
  // console.log('firstnames', firstnames);
  return (

    <Navbar bg="light" data-bs-theme="light">

      <Navbar.Brand href="#home"></Navbar.Brand>
      <Image src={logo} thumbnail style={{ width: "70px" }} alt="human" />        <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end ">
        <Navbar.Text>

          <Dropdown className="super-colors">
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              {firstnames} {lastnames}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Text>
      </Navbar.Collapse>

    </Navbar>

  )
}

export default Content5