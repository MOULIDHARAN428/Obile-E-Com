import React, {  useState } from 'react';
import {Breadcrumb} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Form,Button,Row, Col} from 'react-bootstrap';
import axios from "axios";

function Contact(props){
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [repassword, setRepassword] = useState("");
        const [email, setEmail] = useState("");
        const [telno, setTelno] = useState("");
        const [dob, setDob] = useState("");
        const [gender, setGender] = useState("");
        const [address, setAddress] = useState("");
        const handleSubmit = (evt) => {
            evt.preventDefault();
            if(password === repassword){
                const newUser = {
                    username:  username,
                    password: password,
                    email:  email,
                    telno: telno,
                    dob: dob,
                    gender: gender,
                    address: address
                }
                axios.post('http://localhost:3001/createUser',newUser);      
                alert("Posted Successfully!"); 
            }
            else{
                alert("Check Password");
            }
        };

        return(
            <>
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item className="bread-item"><Link to="/home">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item className="bread-item"><Link to="/signup">Signup</Link></Breadcrumb.Item>
                </Breadcrumb>

                <div className="form container">
                    <h3 className="form-header">Sign Up</h3><hr />

                    <Form class="col-12" onSubmit={handleSubmit}>
                        <Row>
                            <Form.Label column lg={2}>User Name</Form.Label>
                            <Col><Form.Control type="text" name="username" placeholder="Username" 
                                onChange={e => setUsername(e.target.value)} required/></Col>
                        </Row><br />
                        
                        <Row>
                            <Form.Label column lg={2}>Password</Form.Label>
                            <Col><Form.Control type="password" name="password" placeholder="Password" 
                                onChange={e => setPassword(e.target.value)} required/></Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>Re-Type Password</Form.Label>
                            <Col><Form.Control type="password" name="repassword" placeholder="Re-Type Password" 
                                onChange={e => setRepassword(e.target.value)} required/></Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>Email</Form.Label>
                            <Col><Form.Control type="mail" name="email" placeholder="Email"
                                 onChange={e => setEmail(e.target.value)} required/></Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>Tel No</Form.Label>
                            <Col><Form.Control type="number" name="telno" placeholder="Tel no." 
                                 onChange={e => setTelno(e.target.value)}/></Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>DOB</Form.Label>
                            <Col><Form.Control type="date" name="dob"  
                                 onChange={e => setDob(e.target.value)} /></Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>Gender</Form.Label>
                            <Col>
                                <Form.Select onChange={e => setGender(e.target.value)}>
                                    <option value="Male">Male</option>
                                    <option value="Feamle">Female</option>
                                    <option value="others">Others</option>
                                </Form.Select>
                            </Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>Addres</Form.Label>
                            <Col><Form.Control as="textarea" rows={2} name="address" placeholder="Address" 
                                onChange={e => setAddress(e.target.value)} required/></Col>
                        </Row><br />
                        
                        <Form.Group className="mb-3">
                            <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                            />
                        </Form.Group>

                        <Button type="submit" value="Submit">Submit</Button>
                        <br />
                        <br />
                    
                    </Form>
                        
                </div>
            </>
        );
    
}
export default Contact;