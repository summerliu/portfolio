import React from 'react';

export const MyContext = React.createContext({
    validateError: {}
});

export const LoadingContext = React.createContext({
    isOpen: false,
    updateLoading: () => {}
});
