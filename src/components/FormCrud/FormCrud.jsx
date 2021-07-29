<<<<<<< HEAD
import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from '../../hook/useForm'
=======
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from '../../hook/useForm';
>>>>>>> 3c9f3a019cadc4280841f5ebdc93380fe99ce571
import { useDispatch } from 'react-redux';
import { movieRegister } from '../../action/action';

const FormCrud = () => {
<<<<<<< HEAD

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
=======
  const [formValues, handleInputChange, reset] = useForm({
    id: '',
    title: '',
    vote_average: '',
    overview: '',
    image: '',
  });

  const { id, title, vote_average, overview, image } = formValues;

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(movieRegister(id, title, vote_average, overview, image));
    reset();
  };

  return (
    <Container className='mt-3'>
      <h1 className='text-center h2 mb-4'>Registrar películas</h1>
      <Container>
        <Row>
          <Col xs={12} md={8} className='mx-auto'>
            <Form onSubmit={handleRegister}>
              <Form.Group className='mb-3' controlId='formBasicId'>
                <Form.Label>Id</Form.Label>
                <Form.Control
                  type='text'
                  name='id'
                  value={id}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicTitle'>
                <Form.Label>Título de la película</Form.Label>
                <Form.Control
                  type='text'
                  name='title'
                  value={title}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicVote_average'>
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type='number'
                  step='0.1'
                  name='vote_average'
                  value={vote_average}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicOverview'>
                <Form.Label>Reseña</Form.Label>
                <Form.Control
                  type='text'
                  name='overview'
                  value={overview}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicImage'>
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type='text'
                  name='image'
                  value={image}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <div className='d-flex justify-content-center'>
                <Button size='lg' variant='info' type='submit'>
                  Guardar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
>>>>>>> 3c9f3a019cadc4280841f5ebdc93380fe99ce571

export default FormCrud;
