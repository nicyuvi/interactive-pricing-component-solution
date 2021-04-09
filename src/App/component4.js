import React from 'react';
import iconCheck from '../images/icon-check.svg';

function Component4() {
  return (
    <>
      <div>
        <div>
          <img src={iconCheck} alt='check icon' />
          <p>Unlimited websites</p>
        </div>
        <div>
          <img src={iconCheck} alt='check icon' />
          <p>100% data ownership</p>
        </div>
        <div>
          <img src={iconCheck} alt='check icon' />
          <p>Email reports</p>
        </div>
      </div>
      <button>Start my trial</button>
    </>
  );
}

export default Component4;
