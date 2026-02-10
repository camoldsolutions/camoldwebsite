import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import CityDetail from './pages/CityDetail';

const App = () => {
    const location = useLocation();

    // Scroll to top on route change
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const isTransparentPage = location.pathname === '/' || location.pathname.startsWith('/locations/');

    return (
        <div className="font-sans text-gray-800 antialiased bg-gray-50 min-h-screen flex flex-col">
            <Navbar isTransparentPage={isTransparentPage} />

            {/* Main Content */}
            <main className={`flex-grow ${isTransparentPage ? 'pt-0' : 'pt-24 md:pt-28'}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/locations/:citySlug" element={<CityDetail />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default App;
