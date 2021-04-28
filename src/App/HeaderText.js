import React from 'react';
import patternCircle from '../images/pattern-circles.svg';

function HeaderText() {
  return (
    <div className='header-container main-container'>
      <img
        className='header-container__image'
        src={patternCircle}
        alt='circle pattern'
      />
      <h1>Simple, traffic-based pricing</h1>
      <div className='header-container__subtitle'>
        <p>Sign-up for our 30-day trial. </p>
        <p>No credit card required.</p>
      </div>
    </div>
  );
}

export default HeaderText;
