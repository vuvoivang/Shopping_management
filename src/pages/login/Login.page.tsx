import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

type ErrorLogin = {
  email: string;
  password: string;
};

type LoginInfo = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState<ErrorLogin>();
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  // sự kiện thay đổi giá trị của các trường đăng nhập
  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const validate = (values: LoginInfo, name: string) => {
    const errors = {} as ErrorLogin;
    if (name === 'email') {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (regexEmail.test(values.email) === false) {
        errors.email = 'Email is not in correct format';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      }
    }
    if (name === 'password') {
      if (values.password.length < 6) {
        errors.password = 'Password is required at least 6 characters';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
    }
    return errors;
  };
  function isEmptyObj(obj: Record<string, any>) {
    return Object.keys(obj).length === 0;
  }
  const validateAll = values => {
    const errors = {} as ErrorLogin;
    // Validate email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(values.email) === false) {
      errors.email = 'Email is not in correct format';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    }
    // Validate password
    if (values.password.length < 6) {
      errors.password = 'Password is required at least 6 characters';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };
  const handleSubmit = event => {
    event.preventDefault();
    // console.log('test', cookie);
    // console.log('test', cookie.get('token'));
    // if (formValues.email === "" || formValues.password === "") {
    //     setEmptyFieldNotice(true);
    //     return;
    // }
    // Handle validation
    setFormErrors(validateAll(formValues));
    if (!isEmptyObj(formErrors)) {
      return;
    }
    setIsSubmit(true);

    // handle login
  };
  const handleValidation = e => {
    setFormErrors(validate(formValues, e.target.name));
  };

  return (
    <>
      {/* {!cookie.get()?.token ? <h3 className='text-primary'>Login to view all products</h3> : ""} */}
      <section className="c-login-form" id="section-c-login-form">
        <div className="c-login-form__form-content">
          <form action="" method="POST" className="c-login-form__form" id="form-login" onSubmit={handleSubmit}>
            <div className="c-login-form__slogan">LOGIN FORM</div>

            <div className="c-login-form__form-field">
              {/* if from products without loggedIn  */}
              {/* {history.query.url === 'products' ? (
                <Alert variant="outlined" severity="error">
                  Please login to view all products
                </Alert>
              ) : (
                ''
              )} */}
              <div className="c-login-form__form-group form-group">
                <label htmlFor="email" className="c-login-form__form-label form-label">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: 7 }} /> Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="c-login-form__form-control form-control"
                  value={formValues.email}
                  onChange={handleChange}
                  onBlur={handleValidation}
                />

                <span className="c-login-form__form-message form-message">{formErrors?.email}</span>
              </div>
              <div className="c-login-form__form-group form-group">
                <label htmlFor="password" className="c-login-form__form-label form-label">
                  <FontAwesomeIcon icon={faLock} size="lg" style={{ marginRight: 7 }} /> Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="c-login-form__form-control form-control"
                  autoComplete="current-password"
                  value={formValues.password}
                  onChange={handleChange}
                  onBlur={handleValidation}
                />

                <span className="c-login-form__form-message form-message">{formErrors?.password}</span>
              </div>
              {isSubmit && isSuccess && (
                <Alert variant="outlined" severity="success">
                  Login Successfully!
                </Alert>
              )}
              {isSubmit && !isSuccess && (
                <Alert variant="outlined" severity="error">
                  Login Failed!
                </Alert>
              )}
              <button type="submit" className="btn c-login-form__form-submit form-submit">
                <span>Login</span>
              </button>
              <Grid container>
                <Grid item xs>
                  <Link to="/home" style={{ textDecoration: 'none', color: 'blue' }}>
                    Quên mật khẩu ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" style={{ textDecoration: 'none', color: '#f44336' }}>
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
