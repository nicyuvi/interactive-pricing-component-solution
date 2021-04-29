import { React, useState, useEffect } from 'react';

// TODO: Change monthly totals depending on billing toggle

function Slider({ yearlyBilling }) {
  const [sliderValue, setSliderValue] = useState(2);
  const [pageViews, setPageViews] = useState('100K PAGEVIEWS');
  const [monthlyTotals, setMonthlyTotals] = useState(16);

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

  // run side effects when range slider or billing toggle renders
  useEffect(() => {
    // we will pick from this array to display dynamic content
    let pageViewArr = [
      ['10K PAGEVIEWS', 8],
      ['50K PAGEVIEWS', 12],
      ['100K PAGEVIEWS', 16],
      ['500K PAGEVIEWS', 24],
      ['1M PAGEVIEWS', 36],
    ];

    // assign our array content to variables
    let pageViews = pageViewArr[sliderValue][0];
    let monthlyTotals = pageViewArr[sliderValue][1];

    // use pageViews and monthlyTotals to update state
    setPageViews(pageViews);

    // Apply discounts if toggle is true
    let monthlyTotalsDiscount = monthlyTotals * 0.25;

    yearlyBilling
      ? setMonthlyTotals(monthlyTotalsDiscount)
      : setMonthlyTotals(monthlyTotals);
  }, [sliderValue, yearlyBilling]);

  return (
    <div className='slider-container'>
      <p className='slider-container__text pricing-container__group'>
        <span>{pageViews}</span>
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
      <p className='slider-container__price pricing-container__group'>
        <span className='slider-container__price--bold'>
          ${monthlyTotals}.00
        </span>{' '}
        / month
      </p>
    </div>
  );
}

export default Slider;
