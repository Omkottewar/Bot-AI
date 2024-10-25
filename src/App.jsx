import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import './index.css';

function App() {
  const [chat, setChat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex w-screen h-screen bg-custom-gradient">
      <div
        className={`bg-gray-200 h-full fixed md:relative transition-transform duration-400 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:w-1/5`}
      >
        <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
      </div>
      <div className="flex-grow md:w-4/5">
        <Outlet context={{ chat, setChat, toggleMenu }} />
      </div>
    </div>
  );
}

export default App;
