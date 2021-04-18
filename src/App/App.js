import React from 'react';
import HeaderText from './HeaderText';
import PricingComponent from './PricingComponent';

function App() {
  return (
    <>
      <header>
        <HeaderText />
      </header>
      <main>
        <PricingComponent />
      </main>
      <footer>
        <h1>more content</h1>
      </footer>
    </>
  );
}

export default App;
