import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import image from "./images/signIn.png";
import styles from "./IndividualSignUp.module.css";
import { Link } from "react-router-dom";
import facebook from './images/fbk.png';
import google from './images/google.png';

export default class OrganisationSignup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    phone: ""
  };

  // handleChange = event =>{
  //   const isCheckbox= (event.target.type===isCheckbox);
  //   this.setState({
  //     [event.target.name] :isCheckbox ? event.target.checked : event.target.value
  //   });
  // };
  validate = () => {
    // let nameError="";
    let emailError = "";
    // let passwordError="";

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };
  render() {
    return (
      <div>
        <div className={styles.body}>
          <Container>
            <Row>
              <Col lg="6" md="12" sm="12" xs="12">
              <div className={styles.imageSignup}>
                <img
                  src={image}
                  
                  alt="signupimage"
                />
                </div>
              </Col>

              <Col lg="6" md="12" sm="12" xs="12">
                <div className={styles.sign}>
                  <p className={styles.start}>Sign Up</p>
                  <p className={styles.up}>Organization</p>
                </div>
                <FormGroup className={styles.group}>
                <div className={styles.center}>
                <Button className={styles.btnSign}> <img src={facebook} alt="facebook" className={styles.icon}/>
                    Sign up with Facebook
                  </Button>
                  <Button className={styles.btnSign2}><img src={google} alt="google" className={styles.icon}/>
                    Sign up with Google
                  </Button>
                </div>
                </FormGroup>
                <Form onSubmit={this.handleSubmit}>
              
                <FormGroup className={styles.group}>
                    <Label for="Name" className={styles.label}>
                      ORGANISATION NAME
                    </Label>
                    <Input
                      type="Name"
                      name="Name"
                      id="Org Name"
                      placeholder="Enter Name"
                      onChange={this.handleChange}
                    />
                   
                  </FormGroup>
                  <FormGroup className={styles.group}>
                    <Label for="Category" className={styles.label}>
                      CATEGORY
                    </Label>
                    <Input
                      type="Cat"
                      name="Cat"
                      id="Category"
                      placeholder="HealthCare"
                      onChange={this.handleChange}
                    />
                   
                  </FormGroup>


                  <FormGroup className={styles.group}>
                    <Label for="Email"className={styles.label}>
                      EMAIL
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="individualemail"
                      placeholder="bolajiolayinka980@gmail.com"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                   {this.state.emailError ? (<div className={styles.error}>
                          {this.state.emailError}
                        </div>) : null}
                  </FormGroup>
                  <FormGroup className={styles.group}>
                    <Label for="Password" className={styles.label}>
                      PASSWORD
                    </Label>
                    <Input
                      type="Password"
                      name="Password"
                      id="individualPassword"
                      placeholder="*********"
                      onChange={this.handleChange}
                    />
                    <div className={styles.error}>
                      {this.state.passwordError}
                    </div>
                  </FormGroup>
                  <FormGroup className={styles.group}>
                    <Label for="confirmPassword" className={styles.label}>
                      CONFIRM PASSWORD
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="*********"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup className={styles.group}>
                    <Label for="phoneNumber" className={styles.label}>
                      PHONE NUMBER
                    </Label>
                    <Input
                      type="text"
                      name="tel"
                      id="telNo"
                      placeholder="+234 **********"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup className={styles.group}>
                    <Label for="phoneNumber" className={styles.label}>
                      SECONDARY PHONE NUMBER
                    </Label>
                    <Input
                      type="text"
                      name="tel"
                      id="telNo"
                      placeholder="+234 **********"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup className={styles.group}>
                    <Label for="phoneNumber" className={styles.label}>
                      ADDRESS
                    </Label>
                    <Input
                      type="text"
                      name="add"
                      id="telNo"
                     
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  
                  <div className={styles.group}>
                  <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="city " className={styles.label}>
                          CITY
                        </Label>
                        <Input
                          type="text"
                          name="city"
                          id="myCity"
                          placeholder="e.g Ikeja"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="state" className={styles.label}>
                          STATE
                        </Label>
                        <Input
                          type="text"
                          name="state"
                          id="myState"
                          placeholder="Lagos"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  </div>
                  <FormGroup className={styles.group}>
                  <p className={styles.agree}>
                    By signing up with Ajoo, you agree to the Privacy Policy and
                    Terms of Use of the Company.
                  </p>
                  <div className={styles.center}>
                    <Link>
                      {" "}
                      <Button
                        onClick={this.handleSubmit}
                        type="submit"
                        name="submit"
                        className={styles.btn}
                      >
                        Next
                      </Button>
                    </Link>
                  </div>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
