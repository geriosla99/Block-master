import React from 'react'
import { Button, Card } from 'react-bootstrap'

const MovieCard = () => {

    return (
        <div>
            <Card className='m-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.imgur.com/Q5QfZXr.png" />
                    <Card.Body>
                        <Card.Title>TITULO</Card.Title>
                            <Button variant="primary">Detalles</Button>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
