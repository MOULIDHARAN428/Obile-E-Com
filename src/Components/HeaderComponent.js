import React, { useState } from 'react';
import {Navbar, Nav, Container, NavDropdown,Form,Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Header(props){
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fa = login ? "fa fa-log-out" : "fa fa-sign-in";

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if(email && password){
                const config = {
                    headers : {
                        "Content-type":"application/json"
                    }
                }
                const newLogin = {
                    password:  password,
                    email:  email
                }
                const { data } = axios.post('http://localhost:3001/login',newLogin,config)
                .then((response)=>{
                    alert(response.data.message);
                    localStorage.setItem("userInfo",JSON.stringify(data));
                    setLogin(true); 
                }).catch(error => {
                    console.log(error);
                    if(error.response.status === 401 || error.response.status === 400){
                        alert(error.response.data.message);
                    }
                    else{
                        alert(error.response.data.message);
                    }
                    console.log("Error : ",error);
                });   
                
        }
        else if(email){
            alert("Enter Password");
        }
        else if(password){
            alert("Enter Email");
        }
        else{
            alert("Enter Password and Email")
        }
    };
    return(

        <>
            <Navbar className="nav-bar" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="nav-bar-brand" href="/home">
                        <img className='d-block d-sm-none' src="/assets/images/logo.png" alt="Obile Ecom" />
                        <div className='d-none d-sm-block'>OBILE-ECOM</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" /><Navbar.Collapse id="responsive-navbar-nav"><Nav className="me-auto nav-bar-list">
                            <Nav.Link href="/home" className="nav-bar-item">Home</Nav.Link>
                            <NavDropdown title="Store" href="#" id="collasible-nav-dropdown">
                                <NavDropdown.Item className="nav-bar-item-drop" href="/store/women">Women</NavDropdown.Item>
                                <NavDropdown.Item className="nav-bar-item-drop" href="/store/men">Men</NavDropdown.Item>
                                <NavDropdown.Item className="nav-bar-item-drop" href="/store/kids">Kids</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-bar-item" href="/about">About</Nav.Link>
                            <Nav.Link className="nav-bar-item" href="/contact">Contact</Nav.Link>
                            
                            <div className="spliiter-nav"></div>
                            <Button className='log-in-btn' variant="danger"  onClick={!login && handleShow} >
                                <span className={fa}></span>{' '}{login ? "Log out" : "Log in"}
                            </Button>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body onSubmit={handleSubmit}>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail" name="email"
                                    onChange={e => setEmail(e.target.value)}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword" name="password"
                                    onChange={e => setPassword(e.target.value)}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                            <Form.Check type="checkbox" label="Remember password" />
                        </Form.Group>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {' '}
                        <Button variant="primary" type="submit" value="Submit">
                            Log in
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <p>Or</p>
                    <p>Don't have an account ?</p>
                    <Button variant="primary" onClick={handleClose} href="/signup">
                        Sign up
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
export default Header;