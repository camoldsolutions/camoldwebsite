import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

const App = () => {
    const [activePage, setActivePage] = useState('home');

    const navigateTo = (page) => {
        setActivePage(page);
        window.scrollTo(0, 0);
    };

    const isTransparentPage = activePage === 'home';

    return (
        <div className="font-sans text-gray-800 antialiased bg-gray-50 min-h-screen flex flex-col">
            <Navbar activePage={activePage} navigateTo={navigateTo} />

            {/* Main Content */}
            <main className={`flex-grow ${isTransparentPage ? 'pt-0' : 'pt-24 md:pt-28'}`}>
                {activePage === 'home' && <Home navigateTo={navigateTo} />}
                {activePage === 'about' && <About navigateTo={navigateTo} />}
                {activePage === 'certifications' && <Certifications navigateTo={navigateTo} />}
                {activePage === 'contact' && <Contact />}
            </main>

            <Footer navigateTo={navigateTo} />
        </div>
    );
};

export default App;
