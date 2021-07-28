import React from 'react'

const CrudMovies = () => {
    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>id</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Director</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
}

export default CrudMovies
