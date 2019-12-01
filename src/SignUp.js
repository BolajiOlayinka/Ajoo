import React from 'react';
import styles from './Signup.module.css';
import {Row, Container, Col, Button} from "reactstrap";
import signup from './images/signup.png';
import signup1 from './images/signup2.png';
import {Link} from 'react-router-dom'

export default function SignUp() {
    return (
        <div>
         <div className={styles.signUpBody}>
            <Container>
            <div className={styles.signUpHead}>
                <h2>Sign Up As</h2>
            </div>
                <Row>
                   
                    <Col lg="6 mt-3 mb-3 border-right" md="6" sm="12" xs="12">
                        <img src={signup} className={styles.signup} alt="signup"/>
                        <div>
                       <Link to ='./individual'> <Button className={styles.btn}>Individual</Button></Link>
                        </div>
                        </Col>
                        <Col lg="6 mt-3 mb-3" md="6 pr-1"  sm="12" xs="12">
                        <img src={signup1} className={styles.signup} alt="signup"/>
                        <div>
                        <Link to ='./Organisation'><Button className={styles.btn}>Organization</Button></Link>
                        </div>
                    </Col>
                   
                    
                </Row>
            </Container>
            </div>
        </div>
    )
}
