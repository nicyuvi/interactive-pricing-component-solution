import { React, useState } from 'react';
import Slider from './Slider';
import Billing from './Billing';
import FooterText from './FooterText';
import CTAButton from './CTAButton';

function PricingComponent() {
  // !top level state to update toggle button and monthlyTotals
  const [yearlyBilling, setYearlyBilling] = useState(false);
  const [billingToggle, setBillingToggle] = useState(false);

  function billingPricesToggle() {
    // toggles active class for billing toggle btn
    setBillingToggle(!billingToggle);

    // toggles when 25% discount is applied to monthly totals
    setYearlyBilling(!yearlyBilling);
  }

  return (
    <div className='main-container pricing-container'>
      <Slider yearlyBilling={yearlyBilling} />
      <Billing
        billingToggle={billingToggle}
        billingPricesToggle={billingPricesToggle}
      />
      <hr className='pricing-container__block' />
      <FooterText />
      <CTAButton />
    </div>
  );
}

export default PricingComponent;
