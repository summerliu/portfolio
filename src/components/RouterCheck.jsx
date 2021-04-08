import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import store from 'store2';

const RouterCheck = ({component: Component, permission, backto, ...rest}) => {
    // const token = store.get('token');
    return <Route {...rest} render={(props) => (
        permission ? <Redirect to={{pathname: backto || '/login'}}/> : <Component {...props} />
    )}/>;
};

export default RouterCheck;
