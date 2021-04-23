import React from 'react';
import iconCheck from '../images/icon-check.svg';

function FooterText() {
  return (
    <>
      <div className='footer-container pricing-container__group'>
        <div>
          <img src={iconCheck} alt='check icon' />
          <p>Unlimited websites</p>
        </div>
        <div>
          <img src={iconCheck} alt='check icon' />
          <p>100% data ownership</p>
        </div>
        <div>
          <img src={iconCheck} alt='check icon' />
          <p>Email reports</p>
        </div>
      </div>
    </>
  );
}

export default FooterText;
