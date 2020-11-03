import React, { useState } from 'react';
import './style.css';
//import {Redirect} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Modal from 'react-modal';
import  {Button } from 'react-bootstrap';


class RegisterForm extends React.Component {
    constructor() {
      super();
      
    
      this.state = {
        fields: {},
        errors: {},
        show: true
    
      }
      
    
      
   
      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
      this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    };
   /* const openModal = () =>{
      console.log("Open modal");
    }*/
    //let [modalIsOpen, setmodalIsOpen] = useState(false);
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
    
    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields :fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      this.handleShow();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          
          
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }
   /* onSubmit = () => {
  
          this.props.history.push('/Userlogin');
  
   }*/
   
  render() {
    return (
    <div id="main-registration-container">
         <nav className="navbar bg-dark navbar-dark">
          <div className="container">
            <a href="#" className="navbar-brand">Croppin</a>
          </div>
        </nav>
        <section id="header" className="jumbotron text-center">
                     
                <h1 className="display-5">Farmer Registration</h1>
            </section>

				<form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <Container>
        <Modal isOpen={true} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
            </Button>
					</Modal.Footer>
				</Modal>
        
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Card border="light">
              <Card.Body>
                <label>Name:</label>
                <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.username}</div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Card border="light">
              <Card.Body>
                <label>Email ID:</label>
                <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
                <div className="errorMsg">{this.state.errors.emailid}</div>
             </Card.Body>
           </Card>

          </Col>
        </Row>  
          <Row>
          <Col lg={6} md={6} sm={12}>
            <Card border="light">
              <Card.Body>
                <label>Mobile No:</label>
                <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
                <div className="errorMsg">{this.state.errors.mobileno}</div>
              </Card.Body>
           </Card>
           </Col>
           <Col lg={6} md={6} sm={12}> 
           <Card border="light">
              <Card.Body>   
        <label>Password</label>
       <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        </Card.Body>
        </Card>
        </Col>
        </Row> 
        </Container>
        <div className="reg">
        <button className="button">Register</button>
        </div>
        </form>
    </div>
    


      );
  }


}


export default RegisterForm;