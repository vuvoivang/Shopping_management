import React, { useState } from 'react';
import IntroImage from '../../assets/images/introduction.png';

const Introduction: React.FC = () => (
  <section className="c-introduction">
    <div className="c-introduction__info">
      <h1 className="c-introduction__title">Shopping Creative - All you need</h1>
      <p className="c-introduction__description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
      <div>
        <button type="button" id="c-introduction__btn--demo" className="c-introduction__btn-demo">
          <span>Get started</span>
        </button>
        <button type="button" id="c-introduction__btn-download" className="c-introduction__btn-download">
          <span>Shopping now</span>
        </button>
      </div>
    </div>
    <div className="c-introduction__desc">
      <img src={IntroImage} alt="creative online shopping" height={500} className="u-border-radius--medium" />
    </div>
  </section>
);

export default Introduction;
