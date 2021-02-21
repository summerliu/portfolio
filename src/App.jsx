import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
// import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/footer';
import Navigation from './components/navigation';

function App() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{maxWidth: '2560px', minWidth: '320px', overflowX: 'hidden'}}>
            <Router>
                <Navigation isOpen={isOpen} setIsOpen={setIsOpen}/>
                <Route component={Home} exact path="/"/>
                <Route component={About} path="/about"/>
                {/* <Route component={Experience} path="/experience"/> */}
                <Route component={Projects} path="/projects"/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
