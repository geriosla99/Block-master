import React from 'react'
import { Link } from 'react-router-dom'


const Movies = () => {
    return (
        <div>
            hola desde Movies
            <Link to='/login'>
            Iniciar sesion
            </Link>
        </div>
    )
}

export default Movies
