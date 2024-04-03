import React, { useState } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {fetchLogin} from '../redux/reducers/authenticateSlice'

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault();
    dispatch(fetchLogin({id, password}));
    navigate("/");
  }
  return (
    <div className="login-wrap">
      <Container>
      <div className="login-title">로그인</div>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(event) => setId(event.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={(event) => setPassword(event.target.value)}/>
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Login
