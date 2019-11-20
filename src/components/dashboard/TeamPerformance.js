
import React, { useEffect, useState } from 'react';
import { Col, Row, Card, ProgressBar} from 'react-bootstrap';
import './TeamPerformance.scss';

const TeamPerformance = () => {
  const [bars, setBars] = useState([]);

  const getBars = () => [
      { name: 'David Donovan', variant: 'warning', value: 500 },
      { name: 'Margaret Monto', variant: 'danger', value: 87 },
      { name: 'Jonda Jones', variant: 'info', value: 408 },
      { name: 'Glenda Garcia', variant: 'primary', value: 750 },
      { name: 'Sandra Santiago', variant: 'success', value: 970 }
  ]

  useEffect(() => {
    setBars(getBars());
  },[])

  return (
    <Card className="shadow-sm mt-5 p-5 pb-4">
      <h5 className="mb-3">Team Performance</h5>
      <Col className="my-auto">
        <ProgressBars bars = { bars } />
      </Col>
    </Card>
  );
};

const ProgressBars = ({ bars }) => {
  return bars.map(bar => <ProgressBarItem { ...bar } key={ bar.name }/>);
};

const ProgressBarItem = ({ name, variant, value }) => {
  const max = 1000;
  return (
    <Row className="p-2">
      <Col md={3} className="my-auto">
        { name }
      </Col>
      <Col md={7} className="my-auto">
        <ProgressBar className="right" variant={ variant } active now={ value/max*100 }/>
      </Col>
      <Col className="my-auto">
        { value } / { max }
      </Col>
    </Row>
  )
}

export default TeamPerformance ;

