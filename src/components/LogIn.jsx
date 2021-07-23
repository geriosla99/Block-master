import React from 'react'
import { Form, Button, Container } from "react-bootstrap";
import {useForm} from "../useForm";
import {useDispatch} from 'react-redux'
import {login} from '../action'

const LogIn = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email:'',
        password:''
    });

    const {email, password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(login(email,password));
    }

    return (
        <div>
            <Container>
                <h1>Inicio de sesión</h1>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control 
                                placeholder="Correo electrónico" 
                                type="email"
                                name='email'
                                value={email}
                                onChange={handleInputChange}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control 
                                placeholder="Contraseña" 
                                type="password" 
                                name='password'
                                value={password}
                                onChange={handleInputChange}
                                />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Iniciar sesión
                        </Button>
                    </Form>
                    <Container className="auth__social-networks">
          <Container
            className="google-btn"
          >
            <Container className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </Container>
          </Container>
        </Container>

            </Container>    
        </div>
    )
}

export default LogIn
