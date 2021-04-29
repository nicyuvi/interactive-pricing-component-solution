import { React, useState, useEffect } from 'react';

function Billing({ billingToggle, billingPricesToggle }) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 1440;

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='flex-grid-thirds billing-container pricing-container__group'>
      <p className='col-1 placeholder'></p>
      <p className='col-2 billing-container__text'>Monthly Billing</p>
      <div
        className='col-1 billing-container__toggle'
        onClick={billingPricesToggle}
      >
        <div
          className={`billing-container__toggle-btn ${
            billingToggle ? 'active' : ''
          }`}
        ></div>
      </div>
      <p className='col-2 billing-container__text'>Yearly Billing</p>
      <p className='col-1 billing-container__discount'>
        {width >= breakPoint ? '25% discount' : '-25%'}
      </p>
    </div>
  );
}

export default Billing;
