import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const LoadingPage = () => {
    useEffect(() => {
        NProgress.start();
        return () => {
            NProgress.done();
        };
    }, []);
    return (
        <div/>
    );
};

const LoadableComponent = (component) => {
    return Loadable({
        loader: component,
        loading: () => <LoadingPage/>
    });
};

export default LoadableComponent;
