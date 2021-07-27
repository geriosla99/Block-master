import React from 'react'
import { Form, Button, Container } from "react-bootstrap";
import {useForm} from "../hook/useForm";
import {useDispatch} from 'react-redux'
import {login, loginEmailPassword} from '../action/action'
import {loginGoogle} from '../action/action'
import { Link } from 'react-router-dom'

const LogIn = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email:'',
        password:''
    });

    const {email, password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(loginEmailPassword(email,password));
    }

    const handleLoginGoogle = () =>{
        dispatch(loginGoogle());
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
                        <Container className="auth__social-networks">
                            <Container 
                                className="google-btn"
                                onClick={handleLoginGoogle}
                                >
                                <Container className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </Container>
                            </Container>
                        </Container>
                        <Link to='/registro'>Registrarse</Link>
                    </Form>
            </Container>    
        </div>
    )
}

export default LogIn
