import React, { useEffect, useState } from 'react';
import { Col, Row, Card, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import './Performance.scss';
import { DonutChart } from './DonutChart';
import CurrencyFormat from 'react-currency-format';
// import CircularProgressbar from 'react-circular-progressbar';

const Performance = () => {
  const [performanceData, setPerformanceData] = useState([]);

  const [currentUnit, setCurrentUnit] = useState([]);

  const onChange = value => {
    setCurrentUnit(value) ;
  };

  const getPerformanceDate = () => [
    {
      unit: 'month',
      lastCompleted: 26750,
      forcasted: 30000,
      received: 34600,
      completed: 25000,
      trackerLower: 91000,
      trackerUpper: 93000
    },
    {
      unit: 'day',
      lastCompleted: 900,
      forcasted: 1000,
      received: 1400,
      completed: 950,
      trackerLower: 3000,
      trackerUpper: 3400
    },
    {
      unit: 'year',
      lastCompleted: 127670,
      forcasted: 340191,
      received: 357081,
      completed: 110890,
      trackerLower: 120000,
      trackerUpper: 123000
    }
  ]

  useEffect(() => {
    setPerformanceData(getPerformanceDate());
  }, []);

  useEffect(() => {
    setCurrentUnit('month');
  }, []);

  return (
      <Card className="shadow-sm p-5 perfomance-card">
        <Row className="mb-4">
          <Col>
            <h5 className="float-left">Performance</h5>
            <ToggleButtonGroup
              className="TimeframeToggle button-group float-right"
              name="timeUnit"
              defaultValue="month"
              onChange={onChange}
            >
              <ToggleButton className="btn-day" value="day">Day</ToggleButton>
              <ToggleButton className="btn-month" value="month">Month</ToggleButton>
              <ToggleButton className="btn-yr" value="year">Year</ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="text-center p-5 font-weight-bold">
            <DonutChart className="text-center" />
            <h4 className="text-center mt-3 tracker-title text-dark"><span className="text-capitalize">{ currentUnit }</span>ly <br/>SLA Tracker</h4>
          </Col>
          <PerformanceTaskTracker currentUnit={ currentUnit } performanceData={ performanceData } /> 
        </Row>
      </Card>
  );
};


const PerformanceTaskTracker = ({ currentUnit, performanceData}) => {
  let currentPerformanceData = performanceData.filter(p => p.unit === currentUnit);
  return <PerformanceItem { ...currentPerformanceData[0] } />; 
}

const PerformanceItem = ({ unit, lastCompleted, forcasted, received, completed, trackerLower, trackerUpper }) => {
  return (
    <Col md={ 6 }>
      <table className="table mt-5">
        <tbody>
          <tr>
            <th>Task Completed Last { unit }</th>
              <td><CurrencyFormat value={ lastCompleted } displayType={'text'} thousandSeparator={true} /></td>
          </tr>
          <tr>
            <th>Task Forcasted This { unit }</th>
              <td><CurrencyFormat value={ forcasted } displayType={'text'} thousandSeparator={true} /></td>
              <td></td>
          </tr>
          <tr>
            <th>Tasks Received This { unit }</th>
              <td><CurrencyFormat value={ received } displayType={'text'} thousandSeparator={true} /></td>
          </tr>
          <tr>
            <th>Task Completed This { unit }</th>
              <td><CurrencyFormat value={ completed } displayType={'text'} thousandSeparator={true} /></td>
          </tr>
        </tbody>
      </table>
    </Col>   
  )
}
export default Performance;
