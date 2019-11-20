import React from 'react';
import './DonutChart.scss';
import { ArcGauge } from '@progress/kendo-react-gauges';
import './DonutChart.scss'

const DonutChart = () => {
  const value = 98;
  const colors = [
    { from: 0, to: 25, color: 'red' },
    { from: 25, to: 100, color: 'green' },
  ];

  const gaugeOptions = {
    value,
    colors,
    scale: {
      endAngle: 270,
      startAngle: -90,
      rangeLineCap: 'butt',
      rangeSize: 13,
    },
  };

  const gaugeCenter = value => {
    return (
      <div className="center-render">
        <h3 className="font-weight-bolder">{value}%</h3>
        <div>9.1k / 9.3k</div>
      </div>
    );
  };

  return (
    <div className="MonthlySLATracker">
      <ArcGauge {...gaugeOptions} arcCenterRender={gaugeCenter} />
    </div>
  );
};

export { DonutChart };