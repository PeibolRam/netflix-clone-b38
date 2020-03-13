import React from 'react'
import Navbar from '../components/NavbarBrowse'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from 'react-router-dom'
import '../styles/browse.css'
import SlideBrowse from '../components/SlideBrowse'
import SlideByCategory from '../components/SlideByCategory'

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
                        <Link to="/browse/5e6adc84ca2d523984fa1acc">Reproducir</Link>
                    </div>
                </div>
            </div>
            <div className="movies">
                <SlideBrowse/>
                <SlideByCategory category="5e685dc22b40522ee640ac0b" categoryName="Películas actuales"/>
                <SlideByCategory category="5e685ded2b40522ee640ac0d" categoryName="Estrenos"/>
                <SlideByCategory category="5e685df52b40522ee640ac0e" categoryName="Clásicos"/>
                <SlideByCategory category="5e685e242b40522ee640ac12" categoryName="Aventuras"/>
                <SlideByCategory category="5e685e2b2b40522ee640ac13" categoryName="Comedia"/>
                <SlideByCategory category="5e685e332b40522ee640ac14" categoryName="Drama"/>
                <SlideByCategory category="5e685e3a2b40522ee640ac15" categoryName="Terror"/>
                <SlideByCategory category="5e685e412b40522ee640ac16" categoryName="Musicales"/>
                <SlideByCategory category="5e685e4d2b40522ee640ac17" categoryName="Ciencia ficción"/>
                <SlideByCategory category="5e685e5d2b40522ee640ac18" categoryName="Guerra o bélicas"/>
                <SlideByCategory category="5e685e6b2b40522ee640ac19" categoryName="Películas del Oeste"/>
                <SlideByCategory category="5e685e782b40522ee640ac1a" categoryName="Suspenso"/>
                <SlideByCategory category="5e685e852b40522ee640ac1c" categoryName="Adultos"/>

            </div>
            
        </>
    )
}
