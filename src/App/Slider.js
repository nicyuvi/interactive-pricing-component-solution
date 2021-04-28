import { React, useState, useEffect } from 'react';

// TODO: Change monthly totals depending on billing toggle

function Slider({ yearlyBilling }) {
  const [sliderValue, setSliderValue] = useState(2);
  const [pageViews, setPageViews] = useState('100K PAGEVIEWS');
  const [monthlyTotals, setMonthlyTotals] = useState('$16.00');

  // TODO: Apply discounts to monthlyTotals
  // Apply discounts if toggle is true
  console.log(yearlyBilling);
  if (yearlyBilling) console.log('apply discounts');

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

  // run side effects when range slider renders
  useEffect(() => {
    // we will pick from this array to display dynamic content
    let pageViewArr = [
      ['10K PAGEVIEWS', '$8.00'],
      ['50K PAGEVIEWS', '$12.00'],
      ['100K PAGEVIEWS', '$16.00'],
      ['500K PAGEVIEWS', '$24.00'],
      ['1M PAGEVIEWS', '$36.00'],
    ];

    // assign our array content to variables
    let pageViews = pageViewArr[sliderValue][0];
    let monthlyTotals = pageViewArr[sliderValue][1];

    // use pageViews and monthlyTotals to update state
    setPageViews(pageViews);
    setMonthlyTotals(monthlyTotals);
  }, [sliderValue]);

  return (
    <div className='slider-container'>
      <p className='pricing-container__group'>
        <span className='slider-container__text'>{pageViews}</span>
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
        <span className='slider-container__price'>{monthlyTotals}</span> / month
      </p>
    </div>
  );
}

export default Slider;
