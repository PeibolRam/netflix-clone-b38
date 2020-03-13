import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from 'react-router-dom'
import '../styles/slide.css'

const GET_MOVIES = gql`
    {
        getMovies(is_active: true){
            _id
            title
            banner
            media
        }
    }
`;



export default function SlideBrowse() {
   
    const { loading, data, error } = useQuery(GET_MOVIES);
    if (loading) return <h1>Cargando...</h1>;
    if (error) return <h3>{error.message}</h3>;

    return (
        <>  
            <h1 className="miniatures-title">Tendencias</h1>
            <div className="miniatures">
                
                {data.getMovies.map(item => (
                    <Link to={`/browse/${item._id}`} key={item._id}>
                        <div  style={{backgroundImage:`url(${item.banner})`}} className="movie-miniature">
                            <div className="movie-miniature-info">
                                <h2>{item.title}</h2>
                            </div>
                        </div> 
                    </Link> 
                ))}
            </div>
        </>
    )
}
