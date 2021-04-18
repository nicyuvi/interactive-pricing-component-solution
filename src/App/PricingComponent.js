import React from 'react';
import Slider from './Slider';
import Billing from './Billing';
import FooterText from './FooterText';
import CTAButton from './CTAButton';

function PricingComponent() {
  return (
    <div className='main-container pricing-container'>
      <Slider />
      <Billing />
      <hr className='pricing-container__block' />
      <FooterText />
      <CTAButton />
    </div>
  );
}

export default PricingComponent;
