import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Menu, MenuItem, Tooltip } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { securityActions, securitySelector } from 'redux/security';
import { RoutePathNavbar } from 'constants/app.constant';
import { cartActions, cartSelector } from 'redux/cart';
import Logo from '../../assets/images/logo.jpg';

const Header: React.FC = () => {
  const [visibleNav, setVisibleNav] = useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const loginInfo = useSelector(securitySelector.getLoginInfo);
  const cart = useSelector(cartSelector.getCart);
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
    dispatch(cartActions.resetCart());
    history.go(0);
  };
  const MenuItems = [
    {
      label: 'Tài khoản của tôi',
      handleFunc: handleViewMyAccount
    },
    {
      label: 'Đăng xuất',
      handleFunc: handleLogout
    }
  ];
  return (
    <header className="c-header">
      <div className="c-header__logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo shopping" />
        </NavLink>
      </div>

      <nav id="c-header__navigation" className="c-header__navigation" style={{ display: visibleNav ? 'flex' : 'none' }}>
        <ul>
          {RoutePathNavbar.map(item => (
            <li key={item.href} className="c-header__navigation__item">
              <NavLink to={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="c-header__button-group">
          <NavLink to="/cart">
            {' '}
            <button type="button" className="c-header__button-cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="c-header__button-cart-number">{cart.listProduct.length}</span>
            </button>
          </NavLink>

          {loginInfo.user ? (
            <>
              <p className="c-header__welcome">Hi <span className="c-header__user-name">{loginInfo.user.firstName}!</span></p>
              <Tooltip title="Tùy chọn">
                <button type="button" className="c-header__user-option">
                  <Avatar className="c-header__avatar" alt="avatar" onClick={handleOpenUserMenu} src={loginInfo.user.avatar} />
                </button>
              </Tooltip>
            </>
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
            className="c-header__user-menu"
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {MenuItems.map(item => (
              <MenuItem key={item.label} onClick={item.handleFunc}>
                <p className="u-text-align--center">{item.label}</p>
              </MenuItem>
            ))}
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
