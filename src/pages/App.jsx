import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import loadable from '../router/loadable';
// import Loading from '../components/Loading';
import { LoadingContext } from '../helper/context';
import ChatBot from 'react-simple-chatbot';
 
const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];

const LayoutModal = loadable(() => import('./LayoutModal'));

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const updateLoading = (status) => {
        setIsOpen(status);
    };

    return (
        <>
            <LoadingContext.Provider
                value={{
                    isOpen,
                    updateLoading
                }}
            >
                <Switch>
                    <Route component={LayoutModal} path='/'/>
                </Switch>
                <ChatBot steps={steps} />
                {/* <Loading/> */}
            </LoadingContext.Provider>
        </>
    );
}

export default App;
