import React from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'

const FormCrud = () => {
    return (
        <Container>
            <Form onSubmit={handleLogin}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Película Título</Form.Label>
                <Form.Control
                  placeholder='Película'
                  type='text'
                  name='movie'
                  value=''
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Descripcion de la película</Form.Label>
                <Form.Control
                  placeholder='Película'
                  type='text'
                  name='movie'
                  value=''
                  onChange=''
                />
              </Form.Group>
        </Container>
    )
}

export default FormCrud
