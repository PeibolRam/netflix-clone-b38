import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Browse from './views/Browse'
import Movie from './views/Movie'

function Routes(){
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/browse/:id" component={Movie}/>
        </>
    )

}

export default Routes;