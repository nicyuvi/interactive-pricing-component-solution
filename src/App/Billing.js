import React from 'react';

function Billing() {
  return (
    <div className='flex-grid-thirds billing-container pricing-container__group'>
      <p className='col-1 placeholder'></p>
      <p className='col-2 billing-container__text'>Monthly Billing</p>
      <p className='col-1 billing-container__toggle'>
        <div className='billing-container__toggle-btn'></div>
      </p>
      <p className='col-2 billing-container__text'>Yearly Billing</p>
      <p className='col-1 billing-container__discount'>-25%</p>
    </div>
  );
}

export default Billing;
