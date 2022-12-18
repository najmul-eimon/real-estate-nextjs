import { useState } from 'react';
import ReactSlider from 'react-slider';

const FilterRange = ({data, minValue, maxValue, handleInput, name, dataClass}) => {
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);
  return (
    <div className={data === "sidebar" ? "col-sm-12" : "col-sm-6"}>
      <h4>{name}</h4>
      <ReactSlider
        defaultValue={[min, max]}
        className={`slider ${dataClass}`}
        trackClassName="tracker"
        min={min}
        max={max}
        minDistance={100}
        step={100}
        withTracks={true}
        pearling={true}
        renderThumb={(props) => {
          return <div {...props} className="thumb"></div>;
        }}
        renderTrack={(props) => {
          return <div {...props} className="track"></div>;
        }}
        onChange={([minValue, maxValue]) => {
          handleInput(minValue, maxValue);
        }}
      />
      <div className="range-value">
        <p>{dataClass === "price-range" && "$"}{minValue}</p>
        <p>to</p>
        <p>{dataClass === "price-range" && "$"}{maxValue}</p>
      </div>
    </div>
  )
}

export default FilterRange