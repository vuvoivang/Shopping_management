/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { displayToastify } from 'utilities/toastify/toastify.utility';
import { security } from 'redux/security/security.action';
import { securitySelector } from 'redux/security';

type ErrorLogin = {
  email: string;
  password: string;
};

export type LoginInfo = {
  email: string;
  password: string;
};

// eslint-disable-next-line sonarjs/cognitive-complexity
const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const from = location.state?.from;
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const loginInfo = useSelector(securitySelector.getLoginInfo);
  const [formErrors, setFormErrors] = useState<ErrorLogin>();
  const dispatch = useDispatch();
  // sự kiện thay đổi giá trị của các trường đăng nhập
  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const validateField = (values: LoginInfo, name: string) => {
    const errors = {} as ErrorLogin;
    if (name === 'email') {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!regexEmail.test(values.email)) {
        errors.email = 'Email is not in correct format';
      } else {
        errors.email = null;
      }
    } else if (name === 'password') {
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password is required at least 6 characters';
      } else {
        errors.password = null;
      }
    }
    setFormErrors(prevFormErrors => ({ ...prevFormErrors, ...errors }));
  };
  const validateAll = values => {
    const errors = {} as ErrorLogin;
    // Validate email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (regexEmail.test(values.email) === false) {
      errors.email = 'Email is not in correct format';
    }

    // Validate password
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password is required at least 6 characters';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return false;
    }
    return true;
  };
  const handleSubmit = event => {
    event.preventDefault();
    // Handle validation
    // Not return promise or async function => don't need await
    const isValid = validateAll(formValues);
    if (!isValid) {
      return;
    }
    setIsSubmit(true);
    // handleLogin
    dispatch(security(formValues));
  };
  const handleValidation = e => {
    validateField(formValues, e.target.name);
  };
  useEffect(() => {
    if (!isSubmit && loginInfo.user) {
      displayToastify('You have already login!', 'success');
      history.push(from || '/home');
    }
  }, []);
  useEffect(() => {
    if (isSubmit) {
      if (loginInfo.user) {
        displayToastify('Login successfully!', 'success');
        setTimeout(() => {
          history.push(from || '/home');
        }, 1500); // 1500 > 1000 wait to toastify
      } else if (loginInfo.error.length > 0) {
        displayToastify('Login failed!', 'failed');
        setIsSubmit(false);
      }
    }
  }, [loginInfo]);
  return (
    <>
      <section className="c-login-form" id="section-c-login-form">
        <div className="c-login-form__form-content">
          <form action="" method="POST" className="c-login-form__form" id="form-login" onSubmit={handleSubmit}>
            <div className="c-login-form__slogan">LOGIN FORM</div>

            <div className="c-login-form__form-field">
              <div className="c-login-form__form-group form-group">
                <label htmlFor="email" className="c-login-form__form-label form-label">
                  <FontAwesomeIcon className="c-login-form__icon" icon={faEnvelope} size="lg" /> Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="c-login-form__form-control form-control"
                  autoComplete="username"
                  value={formValues.email}
                  onChange={handleChange}
                  onBlur={handleValidation}
                />

                <span className="c-login-form__form-message form-message">{formErrors?.email}</span>
              </div>
              <div className="c-login-form__form-group form-group">
                <label htmlFor="password" className="c-login-form__form-label form-label">
                  <FontAwesomeIcon className="c-login-form__icon" icon={faLock} size="lg" /> Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="c-login-form__form-control form-control"
                  value={formValues.password}
                  onChange={handleChange}
                  onBlur={handleValidation}
                  autoComplete="current-password"
                />

                <span className="c-login-form__form-message form-message">{formErrors?.password}</span>
              </div>
              <button type="submit" className="btn c-login-form__form-submit form-submit">
                <span>Login</span>
              </button>
              <Grid container className="c-login-form__helper">
                <Grid item xs>
                  <Link className="u-text-decoration--none u-color--blue" to="/home">
                    Quên mật khẩu ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link className="u-text-decoration--none u-color--red" to="/register">
                    Chưa có tài khoản? Đăng ký ngay!!!
                  </Link>
                </Grid>
              </Grid>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
