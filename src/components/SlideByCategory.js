import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import '../styles/slide.css'
import { Link } from 'react-router-dom'


const GET_MOVIES = gql`
    query detail_movie($id: ID!){
        getMoviesByCategory(id: $id){
            _id
            title
            banner
            
        }
    }
`;


export default function SlideByCategory(props) {
    const { loading, data, error } = useQuery(GET_MOVIES, {
        variables: { id: props.category }
    });

    if (loading) return <h2>Cargando...</h2>;
    if (error) return <p>{error.message}</p>;
    return (
        <>
            <h1 className="miniatures-title">{props.categoryName}</h1>
            <div className="miniatures">
                {data.getMoviesByCategory.map(item => (
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
