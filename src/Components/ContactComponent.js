import React, { Component } from 'react';
import {Breadcrumb} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Form,Button, Row, Col} from 'react-bootstrap';
import axios from "axios";

class contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            telno: '',
            query: '',
            contacttype: 'mail'
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeTelno = this.handleChangeTelno.bind(this);
        this.handleChangeQuery = this.handleChangeQuery.bind(this);
        this.handleChangeContacttype = this.handleChangeContacttype.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    handleChangeTelno(event) {
        this.setState({telno: event.target.value});
    }
    handleChangeQuery(event) {
        this.setState({query: event.target.value});
    }
    handleChangeContacttype(event) {
        this.setState({contacttype: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const newQuery = {
            name: this.state.name,
            email: this.state.email,
            telno: this.state.telno,
            query: this.state.query,
            contacttype: this.state.contacttype
        }
        axios.post('http://localhost:3001/createQuery',newQuery);      
        alert("Posted Successfully!"+this.state.name+this.state.email+this.state.telno+this.state.query+this.state.contacttype); 
    }

    render(){
        return(
            <>
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item className="bread-item"><Link to="/home">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item className="bread-item"><Link to="/conatact">Contact</Link></Breadcrumb.Item>
                </Breadcrumb>

                <div className="form container">
                    <h3 className="form-header">ENQUERY</h3><hr />

                    <Form class="col-12">
                        <Row>
                            <Form.Label column lg={2}>Name</Form.Label>
                            <Col><Form.Control type="text" name="name" placeholder="Name" 
                                value={this.state.name} onChange={this.handleChangeName} required/></Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>Email</Form.Label>
                            <Col><Form.Control type="mail" name="email" placeholder="Email"
                                 value={this.state.email} onChange={this.handleChangeEmail} required/></Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>Tel No</Form.Label>
                            <Col><Form.Control type="number" name="telno" placeholder="Tel no." 
                                 value={this.state.telno} onChange={this.handleChangeTelno} required/></Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>Query</Form.Label>
                            <Col><Form.Control as="textarea" rows={3} name="query" placeholder="Query" 
                             value={this.state.query} onChange={this.handleChangeQuery} required/></Col>
                        </Row><br />

                        <Row>
                            <Form.Label column lg={2}>Contact Type</Form.Label>
                            <Col>
                                <Form.Select value={this.state.contacttype} onChange={this.handleChangeContacttype}>
                                    <option value="mail">Mail</option>
                                    <option value="message">Message</option>
                                    <option value="tel">Tel</option>
                                </Form.Select>
                            </Col>
                        </Row><br />
                        
                        <Form.Group className="mb-3">
                            <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                            />
                        </Form.Group>

                        <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                        <br />
                        <br />
                    
                    </Form>
                        
                </div>
            </>
        );
    }
}
export default contact;