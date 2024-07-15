import React from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';





function App({ title, children }) {
  const [show, setShow] = useState(false);


  const navigate = useNavigate();



  const [listData, setListData] = useState([]);
  const [firstnames, setFirstNames] = useState("");
  const [lastnames, setLastNames] = useState("");
  const [photo, setPhoto] = useState("");
  const handleClose = () => {
    setShow(false);

    navigate('/Aboutpage', {
      state: {
        firstnames: firstnames,
        lastnames: lastnames,
        listdata: listData,
        photo: photo

      }
    });

  }
  function validateForm() {
    var username = document.forms["frm1"]["Username"].value;
    var password = document.forms["frm1"]["Password"].value;
    var message = document.getElementById("message");



    if (username === "" || password === "") {
      document.getElementById("message").innerHTML = "Please fill out the form";
      return false;
    }


    else if (!listData.filter(obj => obj.first_name === username && obj.last_name === password).length === 1) {
      message.innerHTML = "Invalid username or password.";
      message.classList.add("alert-danger");
      document.getElementById('result').innerHTML = 'USER or password wrong'
      document.getElementById('gamee').innerHTML = 'try again'
    }
    else {
      document.getElementById("message").innerHTML = "";


      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      fetch("https://reqres.in/api/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {


          var listDataFetch = result.data

          window.abz = listDataFetch





          setListData(listDataFetch)





          var master = listDataFetch.filter(obj => obj.first_name === username && obj.last_name === password)[0]



          if (master === undefined) {

            document.getElementById("message").innerHTML = "User or Password is incorrect";
          }
          else {
            setFirstNames(master.first_name);
            setLastNames(master.last_name);

            setPhoto(master.avatar);

            setShow(true);

          }
        })
        .catch((error) => console.error(error));
      return true;


    }


  }
  return (


    <div className="App">




      <div className="container">
        <div className="login justify-content-center align-items-center h-100">
          <form id="frm1">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" className="form-control" id="username" name="Username" defaultValue="George" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" name="Password" defaultValue="Bluth" />
            </div>
            <br />
            <button type="button" id="button" className="btn btn-primary" data-bs-toggle="modal" onClick={validateForm}
              value="Submit" data-bs-target="#myModal">
              SUBMIT
            </button>
            <div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{firstnames} {lastnames}
                  </Modal.Title>

                </Modal.Header>
                <Container>
                  <Row>
                    <Col xs={6} md={4}>
                      <Image src={photo} roundedCircle thumbnail />
                    </Col>
                    <Col xs={6} md={8} className='mx-auto my-auto'>
                      Welcome {firstnames} {lastnames}
                    </Col>

                  </Row>
                  <Row>
                  </Row>
                </Container>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

            </div>


            <p id="message" className="alert"></p>
          </form>
        </div>
      </div >
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">


            <div className="modal-header">

              <button type="button" className="btn-close" data-bs-dismiss="modal">X</button>
            </div>


            <div className="container position-relative">
              <div className="row">
                <div className="col-4" id="gamee"></div>
                <div className="col-8">
                  <div className="position-absolute top-0 end-0 translate-middle"
                    id="gameee">

                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-12" id="mayTable"></div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
}


export default App;
