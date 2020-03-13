import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Browse from './views/Browse'


function Routes(){
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/browse" component={Browse} />
        </>
    )

}

export default Routes;