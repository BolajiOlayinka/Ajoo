import React, { Component } from "react";
import styles from "./IndividualSignUp.module.css";
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
import { Link } from "react-router-dom";
import facebook from './images/fbk.png';
import google from './images/google.png';

export default class signIn extends Component {
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
              <Col lg="6" md="6" sm="12" xs="12">
              <div className={styles.signupimage}>
                <img
                  src={image}
                
                  alt="signupimage"
                />
                </div>
              </Col>

              <Col lg="6" md="6" sm="12" xs="12">
                <div className={styles.sign}>
                  <span className={styles.start}>Sign In</span>
                  <span className={styles.up}>
                    <Link to="./SignUp">Sign Up?</Link>
                  </span>
                </div>

                <Form onSubmit={this.handleSubmit}>
                  <FormGroup className={styles.group}>
                    <Label for="Email" className={styles.label} >
                      EMAIL
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="individualemail"
                      placeholder="Enter Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    {this.state.emailError ? (
                      <div className={styles.error}>
                        {this.state.emailError}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={styles.group}>
                    <Label for="Password" className={styles.label}>
                      PASSWORD
                    </Label>
                    <p className={styles.forgot}>
                      <Link>Forgot Your Password?</Link>
                    </p>
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
                  <div className={styles.center}>
                  
                  <Row>
                  <Col lg="6" md="6" sm="12" xs="12">
                    <Button className={styles.btnSign}> <img src={facebook} alt="facebook" className={styles.icon}/>
                      Sign up with Facebook
                    </Button>
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                    <Button className={styles.btnSign2}><img src={google} alt="google" className={styles.icon}/>
                      Sign up with Google
                    </Button>
                    </Col>
                    </Row>
                    
                  </div>
                  </FormGroup>
                  {/* <p className={styles.agree}>
                    By signing up with Ajoo, you agree to the Privacy Policy and
                    Terms of Use of the Company.
                  </p> */}
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
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
