import React from 'react';
import HeaderText from './HeaderText';
import Slider from './Slider';
import Billing from './Billing';
import FooterText from './FooterText';
import CTAButton from './CTAButton';

function App() {
  return (
    <>
      <header>
        <HeaderText />
      </header>
      <main>
        <Slider />
        <Billing />
        <hr />
        <FooterText />
        <CTAButton />
      </main>
    </>
  );
}

export default App;
