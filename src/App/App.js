import React from 'react';
import HeaderText from './HeaderText';
import Slider from './Slider';
import Billing from './Billing';
import FooterText from './FooterText';

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
      </main>
    </>
  );
}

export default App;
