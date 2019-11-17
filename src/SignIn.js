import React from 'react';
import {Form, Input, Container, Row, Col} from 'reactstrap';
import signIn from './images/signIn.png';



export default function SignIn() {
    return (
        <div>
        <Container>
        <Row>
        <Col lg="6 mt-5" md="6 mt-5" sm="0" xs="0">
        <img src={signIn} alt="signIn"/>
        </Col>
        <Col lg="6 mt-5" md="6 mt-5" sm="12" xs="12">
        <div className="formArea">
        <div className="signSubhead">
                <div className="signIn">
                    
                </div>
                <div className="signup">

                </div>
            </div>
            <Form>
                <Input></Input>
            </Form>
            </div>
        </Col>

            
            </Row>
            </Container>
        </div>
    )
}
