import React from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import { registroEmailPasswordName, loginGoogle } from '../action/action'
import { useDispatch } from 'react-redux'
import { useForm } from '../hook/useForm'
import { createGlobalStyle } from "styled-components"
import { Link } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    background: #352E6C;
    margin: 0 auto;
    padding: 0;
  }
`

const Register = () => {
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formValues

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(name, password, password2)
    dispatch(registroEmailPasswordName(email, password, name))
  }

  const handleLoginGoogle = () => {
    dispatch(loginGoogle())
  }


  return (
    
    <Container className="mt-5">
      <Card className="d-flex justify-content-center align-middle">
      <Container className='mt-4 p-3'>
        <h2>Regístrate</h2>
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
          <Container className='auth__social-networks d-flex justify-content-center mt-3'>
            <Container
              className='google-btn d-flex justify-content-center'
              onClick={handleLoginGoogle}
            >
              <Container className='google-icon-wrapper d-flex justify-content-center'>
                <img
                  className='google-icon'
                  src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                  alt='googlebutton'
                />
              </Container>
            </Container>
          </Container>
            <div className='mt-3 d-flex justify-content-center'>
              <p>¿Ya estas registrado?</p>
              <Link className='text-dark' to='/'>
                Inicia seción
              </Link>
            </div>
        </Form>
      </Container>
      </Card>
    </Container>
    
  )
}

export default Register
