import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import '../styles/movie.css'

const MOVIE_DETAIL = gql`
    query detail_movie($id: ID!){
        getMovie(id:$id){
            _id
            title
            media
        }
    }
`;

function EventDetail(props) {
  const { loading, data, error } = useQuery(MOVIE_DETAIL, {
    variables: { id: props.match.params.id }
  });

  if (loading) return <h2>Cargando...</h2>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
        <Player>
            <source src={data.getMovie.media} />
        </Player>
    </div>
  );
}

export default EventDetail;