import React from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import './login.scss';
import logo from '../../images/logo.png';

const LoginView = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = React.useState(false);

  const changeValue = ({ target: { value, id } }) => {
    setForm({
      ...form,
      [id]: value
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Row className="content-login">
        <Col sm={12} md={5} lg={5} xl={4} className="p-0">
          <Form className="card p-4" onSubmit={(e) => submitForm(e)}>
            <div className="content-img">
              <img src={logo} className="img-fluid " alt="logo" />
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="m-0">Correo electronico</Form.Label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                value={form.email}
                autoComplete="off"
                onChange={(e) => changeValue(e)}
              />
              <Form.Text className="text-muted" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="m-0">Contraseña</Form.Label>
              <input
                type="password"
                className="form-control"
                placeholder="Constraseña"
                id="password"
                name="password"
                value={form.password}
                autoComplete="off"
                onChange={(e) => changeValue(e)}
              />
            </Form.Group>
            {!loading && (
              <Button variant="primary" type="submit">
                Guardar informacion
              </Button>
            )}

            <Form.Label className="mt-5 text-center">
              Olvide mi contraseña
            </Form.Label>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginView;
