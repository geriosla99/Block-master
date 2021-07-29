import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from '../../hook/useForm'
import { useDispatch } from 'react-redux';
import { movieRegister } from '../../action/action';

const FormCrud = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange, reset] = useForm({
        id: '',
        title: '',
        vote_average: '',
        overview: '',
        image: '',
      });

    const { id, title, vote_average, overview, image } = formValues

    const handleRegisterMovie = (e) =>{
        e.preventDefault();
        console.log(id, title, vote_average, overview, image);
        dispatch(movieRegister(id, title, vote_average, overview, image));
        reset();
    }

    return (
        <Container>
            <Container className="mt-5">
                <h3>Registra tu película aquí</h3>
                <Form onSubmit={handleRegisterMovie}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Id de la película</Form.Label>
                    <Form.Control
                    placeholder='Id'
                    type='number'
                    name='id'
                    value={id}
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Película Título</Form.Label>
                    <Form.Control
                    placeholder='Película'
                    type='text'
                    name='title'
                    value={title}
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Puntuacion de la película</Form.Label>
                    <Form.Control
                    placeholder='Puntuación'
                    type='number'
                    min="0" 
                    max="10"
                    name='vote_average'
                    value={vote_average}
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Descripcion de la película</Form.Label>
                    <Form.Control
                    placeholder='Descripcion de la película'
                    type='text'
                    name='overview'
                    value={overview}
                    onChange={handleInputChange}
                    />
                </Form.Group>
               
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Portada de la película</Form.Label>
                    <Form.Control
                    placeholder='Portada de la película'
                    type='file'
                    name='image'
                    value={image}
                    onChange={handleInputChange}
                    />
                </Form.Group>
                </Form> 
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Container>
        </Container>
    )
}

export default FormCrud
