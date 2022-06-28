import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';

const Header: React.FC = () => {
  const [visibleNav, setVisibleNav] = useState(true);
  return (
    <header className="c-header">
      <div className="c-header__logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo shopping" />
        </NavLink>
      </div>

      <nav id="c-header__navigation" className="c-header__navigation" style={{ display: visibleNav ? 'flex' : 'none' }}>
        <ul>
          <li className="c-header__navigation__item">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="c-header__navigation__item">
            <NavLink to="/products">Our products</NavLink>
          </li>
          <li className="c-header__navigation__item">
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>

        <div className="c-header__button-group">
          <button type="button" className="c-header__button-cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="c-header__button-cart-number">3</div>
          </button>
          <button type="button" className="c-header__button-sign-up">
            <NavLink to="/login">Sign in</NavLink>
          </button>
          <button type="button" className="c-header__button-sign-in">
            <NavLink to="/">Sign up</NavLink>
          </button>
        </div>
      </nav>

      <button type="button" className="c-header__icon-nav" onClick={() => setVisibleNav(!visibleNav)}>
        <FontAwesomeIcon icon={faBars} border />
      </button>
    </header>
  );
};

export default Header;
