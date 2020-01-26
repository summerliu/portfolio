import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux'
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Projects from './pages/Projects';
// import Footer from './components/footer';
import Navigation from './components/navigation';

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';

// const rootReducer = combineReducers({});
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
    return (
        // <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <Router>
                    <Route component={Home} exact path="/"/>
                    <Route component={About} path="/about"/>
                    <Route component={CV} path="/cv"/>
                    <Route component={Projects} path="/projects"/>
                </Router>
                {/* <Footer/> */}
            </ThemeProvider>
        // </Provider>
    );
}

export default App;
