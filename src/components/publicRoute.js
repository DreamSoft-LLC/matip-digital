import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from '../contexts/auth';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const {isAuth} =  AuthConsumer()
    return (
        <Route {...rest} render={props => (
           isAuth && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;