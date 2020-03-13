import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import client from './graphql'
import { ApolloProvider } from "@apollo/react-hooks";

ReactDOM.render(
    <ApolloProvider client={client}>   
        <Router>
            <Routes/>
        </Router>    
    </ApolloProvider>
, document.getElementById('root')
);

