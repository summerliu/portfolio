import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/footer';
import Navigation from './components/navigation';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{maxWidth: '2560px', minWidth: '320px', overflowX: 'hidden'}}>
            <BrowserRouter>
                <Navigation isOpen={isOpen} setIsOpen={setIsOpen}/>
                <Routes>
                    <Route element={<Home/>} path="/"/>
                    <Route element={<About/>} path="/about"/>
                    <Route element={<Projects/>} path="/projects"/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
