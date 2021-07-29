import React from 'react'
import { Table } from 'react-bootstrap';

const CrudMovies = () => {
    return (
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Puntaje</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </Table>

    )
}

export default CrudMovies
