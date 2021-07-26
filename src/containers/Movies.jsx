import React from 'react'
import { GlobalStyle } from './Movies/Movies';
import MovieCard from "../components/MovieCard/MovieCard";
import BannerMovies from "../components/Banner/BannerMovies";
import Navbar from "../components/Navbar/Navbar";


const Movies = () => {
    return (
        <GlobalStyle>
            <Navbar/>
            <BannerMovies/>
            <MovieCard/>
        </GlobalStyle>
    )
}

export default Movies
