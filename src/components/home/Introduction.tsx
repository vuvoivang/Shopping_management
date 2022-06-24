import React, { useState } from 'react';

const Introduction: React.FC = () => {
  const [visibleNav, setVisibleNav] = useState(true);
  return (
    <section className="introduction">
      <div className="introduction__info">
        <h1 className="introduction__title">Shopping Creative - All you need</h1>
        <p className="introduction__description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
        <div>
          <button type="button" id="introduction__btn--demo" className="introduction__btn-demo">
            <span>Get started</span>
          </button>
          <button type="button" id="introduction__btn-download" className="introduction__btn-download">
            <span>Shopping now</span>
          </button>
        </div>
      </div>
      <div className="introduction__desc">
        <img src="/images/introduction.png" alt="creative online shopping" height={500} style={{ borderRadius: 30 }} />
      </div>
    </section>
  );
};

export default Introduction;
