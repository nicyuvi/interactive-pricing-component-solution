import React from 'react';

function Billing() {
  return (
    <div className='flex-grid-thirds billing-container pricing-container__group'>
      <p className='col placeholder'></p>
      <p className='col billing-container__text'>Monthly Billing</p>
      <p className='col billing-container__toggle'>toggle</p>
      <p className='col billing-container__text'>Yearly Billing</p>
      <p className='col billing-container__discount'>-25%</p>
    </div>
  );
}

export default Billing;
