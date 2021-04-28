import React from 'react';

// TODO: Add UI toggle functionality

function Billing({ billingPricesToggle }) {
  return (
    <div className='flex-grid-thirds billing-container pricing-container__group'>
      <p className='col-1 placeholder'></p>
      <p className='col-2 billing-container__text'>Monthly Billing</p>
      <div
        className='col-1 billing-container__toggle'
        onClick={billingPricesToggle}
      >
        <div className='billing-container__toggle-btn'></div>
      </div>
      <p className='col-2 billing-container__text'>Yearly Billing</p>
      <p className='col-1 billing-container__discount'>-25%</p>
    </div>
  );
}

export default Billing;
