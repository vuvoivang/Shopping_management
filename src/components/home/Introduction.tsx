import React from 'react';
import { NavLink } from 'react-router-dom';
import IntroImage from '../../assets/images/introduction.png';

const Introduction: React.FC = () => (
  <section className="c-introduction">
    <div className="c-introduction__info">
      <h1 className="c-introduction__title">Shopping Creative - All you need</h1>
      <p className="c-introduction__description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
      <div className="c-introduction__btn-group">
        <NavLink to="/products">
          {' '}
          <button type="button" id="c-introduction__btn-demo" className="c-introduction__btn-demo">
            <span>Get started</span>
          </button>
        </NavLink>
        <NavLink to="/products">
          {' '}
          <button type="button" id="c-introduction__btn-shopping" className="c-introduction__btn-shopping">
            <span>Shopping now</span>
          </button>
        </NavLink>
      </div>
    </div>
    <div className="c-introduction__desc">
      <img src={IntroImage} alt="creative online shopping" height={500} className="u-border-radius--medium" />
    </div>
  </section>
);

export default Introduction;
