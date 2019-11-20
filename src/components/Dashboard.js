
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CompanyUpdates from './dashboard/CompanyUpdates';
import TeamPerformance from './dashboard/TeamPerformance';
import Performance from './dashboard/Performance';
import PendingDates from './dashboard/PendingDates';
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div id="page-content-wrapper">
      <div id="wrapper" className="my-auto">
        <Row>
          <Col className="float-left">
            <h3 className="title pt-4 pb-4 font-weight-bolder">Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Performance />
            <TeamPerformance />
            <CompanyUpdates /> 
          </Col>
          <Col md={4}>
            <PendingDates />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;