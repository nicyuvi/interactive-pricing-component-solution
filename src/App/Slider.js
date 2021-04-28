import { React, useState, useEffect } from 'react';

function Slider() {
  const [sliderValue, setSliderValue] = useState(2);

  // call when slider value changes
  function sliderCallBack(e) {
    let minSliderValue = e.target.min,
      maxSliderValue = e.target.max,
      sliderValue = e.target.value;

    // update sliderValue state
    setSliderValue(sliderValue);

    // update background size
    e.target.style.backgroundSize =
      ((sliderValue - minSliderValue) * 100) /
        (maxSliderValue - minSliderValue) +
      '% 100%';
  }

  // TODO: display different page views and prices as side effect
  // run side effects when range slider renders
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
          min='0'
          max='4'
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
