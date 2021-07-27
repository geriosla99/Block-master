import React from 'react'
<<<<<<< HEAD
import { Form, Button, Container } from "react-bootstrap";
import { registroEmailPasswordName } from "../action/action";
import {useDispatch} from 'react-redux';
import { useForm } from "../hook/useForm";
import {loginGoogle} from '../action/action'
=======
import { Form, Button, Container } from 'react-bootstrap'
import { registroEmailPasswordName } from '../action/action'
import { useDispatch } from 'react-redux'
import { useForm } from '../hook/useForm'
>>>>>>> malena

const Register = () => {
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formValues

<<<<<<< HEAD
    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(name, password, email)
        dispatch(registroEmailPasswordName(email,password,name))
    }

    const handleLoginGoogle = () =>{
        dispatch(loginGoogle());
    }

    return (
        <Container className='mt-5'>
            <Container className='mt-3'>
                <Form onSubmit={handleRegister}>
                    <Form.Group 
                    className="mb-3" 
                    controlId="formBasicName"
                    >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        type="name" 
                        placeholder="Nombre"
                        name='name'
                        value={name}
                        onChange={handleInputChange}
                        required 
                        />
                    </Form.Group>
                    <Form.Group 
                    className="mb-3" 
                    controlId="formBasicEmail"
                    >
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name='email'
                        value={email}
                        onChange={handleInputChange} 
                        required
                        />
                    </Form.Group>
                    <Form.Group 
                    className="mb-3" 
                    controlId="formBasicPassword"
                    >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Contraseña"
                        name='password'
                        value={password}
                        onChange={handleInputChange}
                        required
                        />
                    </Form.Group>
                    <Form.Group 
                    className="mb-3" 
                    controlId="formBasicRepitPassword"
                    >
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Confirmar contraseña" 
                        name='password2'
                        value={password2}
                        onChange={handleInputChange} 
                        required    
                        />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                    >
                        Enviar
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
                </Form> 
            </Container>
        </Container>
    )
=======
  const handleRegister = (e) => {
    e.preventDefault()
    console.log(name, password, password2)
    dispatch(registroEmailPasswordName(email, password, name))
  }

  return (
    <Container className='mt-5'>
      <Container className='mt-3'>
        <Form onSubmit={handleRegister}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='name'
              placeholder='Nombre'
              name='name'
              value={name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              value={email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type='password'
              placeholder='Contraseña'
              name='password'
              value={password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicRepitPassword'>
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirmar contraseña'
              name='password2'
              value={password2}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Enviar
          </Button>
        </Form>
      </Container>
    </Container>
  )
>>>>>>> malena
}

export default Register
