import { React, useState } from 'react';
import Slider from './Slider';
import Billing from './Billing';
import FooterText from './FooterText';
import CTAButton from './CTAButton';

function PricingComponent() {
  // !top level state to update toggle button and monthlyTotals
  const [yearlyBilling, setYearlyBilling] = useState(false);

  function billingPricesToggle() {
    //  Add/remove class to toggle btn
    // TODO: Add UI toggle functionality

    // update yearlyBilling state -- pass into slider component
    setYearlyBilling(!yearlyBilling);
  }
  return (
    <div className='main-container pricing-container'>
      <Slider yearlyBilling={yearlyBilling} />
      <Billing billingPricesToggle={billingPricesToggle} />
      <hr className='pricing-container__block' />
      <FooterText />
      <CTAButton />
    </div>
  );
}

export default PricingComponent;
