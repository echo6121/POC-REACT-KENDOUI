import React, { useEffect, useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import MapIcon from '../../assets/us-map.svg';
import './PendingDates.scss';

const PendingDates = () => {
  const [pendingData, setPendingData] = useState([]);
  const getPendingData = () => [
    {
      id: 12221,
      address: 'Ben Hill County, GA',
      daysRemaining: 7,
      date: '10-10-2018'
    },
    {
      id: 12222,
      address: 'Bear Lake County, ID',
      daysRemaining: 28,
      date: '10-31-2018'
    },
    {
      id: 12223,
      address: 'Dundee County, MI',
      daysRemaining: 28,
      date: '10-31-2018'
    },
    {
      id: 12224,
      address: 'Clinton County, NY',
      daysRemaining: 43,
      date: '11-15-2018'
    },
    {
      id: 12225,
      address: 'Yuma County, AZ',
      daysRemaining: 47,
      date: '10-10-2018'
    },
    {
      id: 12226,
      address: 'Howard County, AK',
      daysRemaining: 58,
      date: '11-30-2018'
    },
    {
      id: 12227,
      address: 'Howard County, AK',
      daysRemaining: 58,
      date: '11-30-2018'
    },
    {
      id: 12228,
      address: 'Acadia Parish, LA',
      daysRemaining: 58,
      date: '11-30-2018'
    },
    {
      id: 12229,
      address: 'Humboldt County, CA',
      daysRemaining: 73,
      date: '12-15-2018'
    },
    {
      id: 12230,
      address: 'Lake County. FL',
      daysRemaining: 73,
      date: '12-15-2018'
    },
    {
      id: 12231,
      address: 'Howard County, AK',
      daysRemaining: 58,
      date: '11-30-2018'
    }  
  ]

  useEffect(() => {
    setPendingData(getPendingData());
  },[]);


  return (
    <Card className="shadow-sm pt-3 p-5">
      <div className="pending-dates">
        <h5>Pending Economic Loss Dates</h5>
        <Row>
          <Col className="text-center mt-4 mb-5">
            <img src={ MapIcon } alt="us-map" width="90%" />
          </Col>
        </Row>
        <PendingData pendingData={ pendingData } />
        <Row>
          <Col className="text-right mt-4 read-more">
            <a href="/">View all pending economic loss dates</a>
          </Col> 
        </Row>
      </div>
    </Card>
  );
};

const PendingData = ({ pendingData }) => {
  return pendingData.map(item => <PendingDataItem { ...item }  key={ item.id }/>)
};

const PendingDataItem = ({ address, daysRemaining, date }) => {
  const getMonth = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const arr = date.split('-');
    const monthIndex = parseInt(arr[0]) - 1;
    const m = monthNames[monthIndex].substring(0, 3);
    return m;
  };
  const getDate = () => {
    const arr = date.split('-');
    let d = parseInt(arr[1]);
    return d;
  }
  return (
    <Row className="text-center p-2 pt-3">
      <Col md={4} xs={12} className= "mx-auto">
        <div className="date-card overflow-hidden align-middle float-right">
          <div className="date"><h3>{ getDate() }</h3></div>
          <p className="month text-uppercase align-baseline">{ getMonth() }</p>
        </div>
      </Col>
      <Col md={8} xs={12} className="text-left loss-date">
            <p className="loss-title">Economic Loss Date</p>
            <p className="address">{ address }</p>
            <p className="remain-dates">{ daysRemaining } Days Remaining</p>
      </Col>
    </Row>
  )
}

export default PendingDates;
