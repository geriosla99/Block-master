import React from 'react'
import MovieCard from "../components/MovieCard/MovieCard";
import BannerMovies from "../components/Banner/BannerMovies";
import Navbar from "../components/Navbar/Navbar";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: #352E6C;
    margin: 0 auto;
    padding: 0;
  }
`;

const Movies = () => {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <BannerMovies/>
            <MovieCard/>
        </>
    )
}

export default Movies
