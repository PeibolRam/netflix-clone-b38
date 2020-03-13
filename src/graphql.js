import { ApolloClient } from 'apollo-client' //Cliente apollo
import { createUploadLink } from 'apollo-upload-client' //Conexion con el schema
import { InMemoryCache } from 'apollo-cache-inmemory' //Hace cache de queries


const GRAPH_URI = 'https://cndevf-clone-netflix.herokuapp.com/';

const httpLink = createUploadLink({
    uri: GRAPH_URI
}); //Se conecta a graphql y lee schema


export default new ApolloClient({
    link: httpLink, //combinacion de schema y el envio de cabeceras 
    cache: new InMemoryCache()
})