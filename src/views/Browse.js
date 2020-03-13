import React from 'react'
import Navbar from '../components/NavbarBrowse'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from 'react-router-dom'
import '../styles/browse.css'
import SlideBrowse from '../components/SlideBrowse'

const GET_MOVIE = gql`
    {
        getMovie(id: "5e6adc84ca2d523984fa1acc"){
            _id
            title
            banner
            description
        }
    }
`;

export default function Browse() {
    const { loading, data, error } = useQuery(GET_MOVIE);
    if (loading) return <h1>Cargando...</h1>;
    if (error) return <h3>{error.message}</h3>;

    return (
        <>
            <Navbar/>
            <div className="main-movie" >
                <div className="main-movie-container">
                    <div className="main-movie-container-info">
                        <h1>{data.getMovie.title}</h1>
                        <p>{data.getMovie.description}</p>
                        <Link to="/">Reproducir</Link>
                    </div>
                </div>
            </div>
            <div className="movies">
                <SlideBrowse/>
            </div>
            
        </>
    )
}
