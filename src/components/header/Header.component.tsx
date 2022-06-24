import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [visibleNav, setVisibleNav] = useState(true);
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src="/images/logo.jpg" alt="Logo shopping" />
        </NavLink>
      </div>

      <nav id="header__navigation" className="header__navigation" style={{ display: visibleNav ? 'flex' : 'none' }}>
        <ul>
          <li className="header__navigation__item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="header__navigation__item">
            <NavLink to="/products">Our products</NavLink>
          </li>
          <li className="header__navigation__item">
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>

        <div className="header__button-group">
          <button type="button" className="header__button-cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="header__button-cart-number">3</div>
          </button>
          <button type="button" className="header__button-sign-up">
            <NavLink to="/">Sign in</NavLink>
          </button>
          <button type="button" className="header__button-sign-in">
            <NavLink to="/">Sign up</NavLink>
          </button>
        </div>
      </nav>

      <button type="button" className="header__icon-nav" onClick={() => setVisibleNav(!visibleNav)}>
        <FontAwesomeIcon icon={faBars} border />
      </button>
    </header>
  );
};

export default Header;
