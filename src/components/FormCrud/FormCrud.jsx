import React from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import CrudMovies from "../CRUD/CrudMovies";

const FormCrud = () => {
    return (
        <div>
            <Form>
                <Form.Label>Titulo de la película</Form.Label>
                <Form.Control type="text" placeholder="Normal text" />
            </Form>
            <CrudMovies/>
        </div>
    )
}

export default FormCrud
