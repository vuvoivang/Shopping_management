import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Menu, MenuItem, Tooltip } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { securityActions, securitySelector } from 'redux/security';
import Logo from '../../assets/images/logo.jpg';

const Header: React.FC = () => {
  const [visibleNav, setVisibleNav] = useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const loginInfo = useSelector(state => securitySelector.getLoginInfo(state));
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleViewMyAccount = () => {
    console.log('View my account');
    handleCloseUserMenu();
  };
  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(securityActions.logout());
    history.go(0);
  };

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
          <NavLink to="/cart">
            {' '}
            <button type="button" className="c-header__button-cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="c-header__button-cart-number">3</span>
            </button>
          </NavLink>

          {loginInfo.user ? (
            <Tooltip title="Tùy chọn">
              <button type="button" className="c-header__user-option">
                <Avatar className="c-header__avatar" alt="avatar" onClick={handleOpenUserMenu} src={loginInfo.user.avatar} />
              </button>
            </Tooltip>
          ) : (
            <>
              {' '}
              <button type="button" className="c-header__button-sign-up">
                <NavLink to="/login">Sign in</NavLink>
              </button>
              <button type="button" className="c-header__button-sign-in">
                <NavLink to="/">Sign up</NavLink>
              </button>
            </>
          )}

          <Menu
            style={{ marginTop: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleViewMyAccount}>
              <p style={{ textAlign: 'center' }}>Tài khoản của tôi</p>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <p style={{ textAlign: 'center' }}>Đăng xuất</p>
            </MenuItem>
          </Menu>
        </div>
      </nav>

      <button type="button" className="c-header__icon-nav" onClick={() => setVisibleNav(!visibleNav)}>
        <FontAwesomeIcon icon={faBars} border />
      </button>
    </header>
  );
};

export default Header;
