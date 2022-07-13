import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faCartShopping, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Menu, MenuItem, Tooltip } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { securityActions, securitySelector } from 'redux/security';
import { MenuItemsLanguage, RoutePathNavbar } from 'constants/app.constant';
import { cartActions, cartSelector } from 'redux/cart';
import { languageActions, languageSelector } from 'redux/language';
import { FormattedMessage } from 'react-intl';
import Logo from '../../assets/images/logo.jpg';

const Header: React.FC = () => {
  const [visibleNav, setVisibleNav] = useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openLanguage, setOpenLanguage] = React.useState(null);
  const loginInfo = useSelector(securitySelector.getLoginInfo);
  const cart = useSelector(cartSelector.getCart);
  const language = useSelector(languageSelector.getLocale);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleViewMyAccount = () => {
    handleCloseUserMenu();
  };
  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(securityActions.logout());
    dispatch(cartActions.resetCart());
    history.go(0);
  };
  const handleOpenLanguage = event => {
    setOpenLanguage(event.currentTarget);
  };
  const handleCloseLanguage = () => {
    setOpenLanguage(null);
  };

  function changeLanguage(lang) {
    setOpenLanguage(null);
    dispatch(languageActions.setLocale(lang));
  }
  const MenuItemsOptions = [
    {
      labelId: 'my_account',
      handleFunc: handleViewMyAccount
    },
    {
      labelId: 'log_out',
      handleFunc: handleLogout
    }
  ];
  return (
    <header className="c-header">
      <div className="c-header__logo">
        <NavLink to="/home">
          <img src={Logo} alt="Logo shopping" />
        </NavLink>
      </div>

      <nav id="c-header__navigation" className="c-header__navigation" style={{ display: visibleNav ? 'flex' : 'none' }}>
        <ul>
          {RoutePathNavbar.map(item => (
            <li key={item.href} className="c-header__navigation__item">
              <NavLink to={item.href}>
                <FormattedMessage id={item.label} />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="c-header__button-group">
          <NavLink to="/cart">
            {' '}
            <button type="button" className="c-header__button-cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="c-header__button-cart-number">{cart.listProduct?.length || 0}</span>
            </button>
          </NavLink>
          <div>
            <button type="button" onClick={handleOpenLanguage} className="c-header__button-language">
              <FontAwesomeIcon icon={faGlobe} border />
            </button>
            <Menu
              id="menu-language"
              className="c-header__language-menu"
              anchorEl={openLanguage}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(openLanguage)}
              onClose={handleCloseLanguage}
            >
              {MenuItemsLanguage.map(item => (
                <MenuItem key={item.value} onClick={() => changeLanguage(item.value)} className={language === item.value ? 'c-header__language-menu--selected' : ''}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </div>
          {loginInfo.user ? (
            <>
              <p className="c-header__welcome">
                <FormattedMessage id="hi" defaultMessage="Hi" /> <span className="c-header__user-name">{loginInfo.user.firstName}!</span>
              </p>
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
                <NavLink to="/login">
                  <FormattedMessage id="sign_in" defaultMessage="Sign in" />
                </NavLink>
              </button>
              <button type="button" className="c-header__button-sign-in">
                <NavLink to="/">
                  <FormattedMessage id="sign_up" defaultMessage="Sign up" />
                </NavLink>
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
            {MenuItemsOptions.map(item => (
              <MenuItem key={item.labelId} onClick={item.handleFunc}>
                <p className="u-text-align--center">
                  <FormattedMessage id={item.labelId} />
                </p>
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
