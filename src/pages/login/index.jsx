import React from 'react';
import { Button, Col, Row, Form, Spinner } from 'react-bootstrap';
import './login.scss';
import logo from '../../images/logo.png';
import ApiConsumer from '../../services';

const Auth = new ApiConsumer({ url: 'login/' });

const LoginView = () => {
  const [form, setForm] = React.useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = React.useState(false);

  const changeValue = ({ target: { value, id } }) => {
    setForm({
      ...form,
      [id]: value
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await Auth.petition(form, 'POST');
    if (data) {
      setLoading(false);
    }
  };

  return (
    <div>
      <Row className="content-login">
        <Col sm={12} md={6} lg={3} xl={3} className="p-0">
          <Form className="card p-4" onSubmit={(e) => submitForm(e)}>
            <div className="content-img">
              <img src={logo} className="img-fluid " alt="logo" />
            </div>
            <Form.Group className="mb-3" controlId="formBasicusername">
              <Form.Label className="m-0">Nombre de usuario</Form.Label>
              <input
                className="form-control"
                type="username"
                placeholder="Nombre de usuario"
                id="username"
                name="username"
                value={form.username}
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

            <Button variant="primary" type="submit">
              {!loading ? (
                'Iniciar sesión'
              ) : (
                <Spinner animation="border" role="status" className="loading">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
            </Button>

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
