import React, { useEffect, useState } from 'react';
import './style.css';
import { Button } from 'antd';
import mainLogo from '../../assets/icons/main_logo.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <img src={mainLogo} alt="Alinda Logo" className="header-logo" />
        <div className="header-buttons">
          <Button
            ghost
            className="header-button"
            onClick={() => console.log('Projeler tıklandı')}
          >
            Projeler
          </Button>
          <Button
            ghost
            
            className="header-button"
            onClick={() => console.log('Menü tıklandı')}
          >
            Menü
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
