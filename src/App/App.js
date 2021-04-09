import React from 'react';
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
import Component4 from './component4';

function App() {
  return (
    <>
      <header>
        <Component1 />
      </header>
      <main>
        <Component2 />
        <Component3 />
        <hr />
        <Component4 />
      </main>
    </>
  );
}

export default App;
