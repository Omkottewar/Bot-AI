import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'; 
import { useState } from 'react';
import { HiMenu, HiMoon, HiSun } from 'react-icons/hi';

export default function Navbar({ toggleMenu }) {
    const [mode, setMode] = useState('light');
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    const toggleMode = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
            {isMobile && (
                    <button onClick={toggleMenu} className="text-gray-800">
                        <HiMenu size={24} />
                    </button>
                )}
                <Link to="/" className="text-2xl font-bold text-gray-800">
                    Bot AI
                </Link>
                
            </div>
        </header>
    );
}
