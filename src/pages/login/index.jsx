import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './login.scss';

const LoginView = () => {
  return (
    <Row className="content-login">
      <Col sm={12} md={6}>
        Walkway
        <Button> Guardar informacion</Button>
      </Col>
    </Row>
  );
};

export default LoginView;
