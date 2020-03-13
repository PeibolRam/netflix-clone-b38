import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
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
        <div className="miniatures">
            {console.log(data.getMovies)}
            {data.getMovies.map(item => (
                    <div key={item._id} style={{backgroundImage:`url(${item.banner})`}} className="movie-miniature">
                        <div className="movie-miniature-info">
                            <h2>{item.title}</h2>
                        </div>
                    </div>  
                ))}
        </div>
    )
}
