import { React, useState, useEffect } from 'react';

function Slider() {
  // set slider value state
  const [sliderValue, setSliderValue] = useState(3);

  // update sliderValue state when slider value changes
  function sliderCallBack(e) {
    setSliderValue(e.target.value);
  }

  // do something when slider value changes
  useEffect(() => {
    console.log(sliderValue, 'value changing');
  }, [sliderValue]);

  return (
    <div className='slider-container'>
      <p className='pricing-container__group'>
        <span className='slider-container__text'>100K PAGEVIEWS</span>
      </p>
      <div className='slider-container__slider'>
        <input
          type='range'
          min='1'
          max='5'
          value={sliderValue}
          onChange={sliderCallBack}
          className='slider'
          id='slider'
        ></input>
      </div>
      <p className='pricing-container__group'>
        <span className='slider-container__price'>$16.00</span> / month
      </p>
    </div>
  );
}

export default Slider;
