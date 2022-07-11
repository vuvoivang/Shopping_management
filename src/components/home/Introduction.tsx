import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import IntroImage from '../../assets/images/introduction.png';

const Introduction: React.FC = () => (
  <section className="c-introduction">
    <div className="c-introduction__info">
      <h1 className="c-introduction__title"><FormattedMessage id="intro_title" defaultMessage="Shopping Creative - All you need" /></h1>
      <p className="c-introduction__description">
        <FormattedMessage id="intro_desc" defaultMessage="Perfect service is the fastest way to the hearts of shoppers. Decisive price, experience holds the heart" />
      </p>
      <div className="c-introduction__btn-group">
        <NavLink to="/products">
          {' '}
          <button type="button" id="c-introduction__btn-demo" className="c-introduction__btn-demo">
            <span><FormattedMessage id="intro_btn_start" defaultMessage="Get started" /></span>
          </button>
        </NavLink>
        <NavLink to="/products">
          {' '}
          <button type="button" id="c-introduction__btn-shopping" className="c-introduction__btn-shopping">
            <span><FormattedMessage id="intro_btn_shopping" defaultMessage="Shopping now" /></span>
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
