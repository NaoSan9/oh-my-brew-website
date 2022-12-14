import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "../../styles/FiltersCss/Filters.css";
import PropTypes from "prop-types";

function AlcFilter({ alcChange, maxAlcValue, minAlcValue }) {
  return (
    <div className="alc-filter alcool">
      <MultiRangeSlider
        min={0}
        max={11}
        step={1}
        minValue={minAlcValue || 0}
        maxValue={maxAlcValue || 11}
        ruler
        labels={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"]}
        stepOnly
        onInput={(el) => {
          alcChange(el);
        }}
      />
    </div>
  );
}

AlcFilter.propTypes = {
  alcChange: PropTypes.func.isRequired,
  minAlcValue: PropTypes.number.isRequired,
  maxAlcValue: PropTypes.number.isRequired,
};

export default AlcFilter;
