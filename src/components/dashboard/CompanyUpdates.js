import React, { useEffect, useState } from 'react';
import { Col, Row, Alert, Card } from 'react-bootstrap';
import './CompanyUpdates.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CompanyUpdatesCard = () => {
  const [updates, setUpdates] = useState([]);
  
  const getData = () => [
    {
      isAlert: true,
      title: 'Mainframe down and Leretanet slow.',
      content: 'Users are unable to login into Mainframe. Leretanet accessible, but is running slow. Engineers have been contacted and are working on a solution. ETA 30 min.'
    },
    {
      isAlert: false,
      title: 'Leave Your PC On Wednesday.',
      content: 'Your PC will be scanned every Wednesday Night. Help Desk and Technical Support requests that you leave your PC with the power on over night. The Antivirus has been scheduled.'
    }
  ];

  useEffect(() => {
    setUpdates(getData());
  }, []);
  
  return (
    <Card className="shadow-sm mt-5 p-5 pb-3">
      <div className="update-card">
        <Row>
          <Col><h5>Company Updates</h5></Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <CompanyUpdateList items={ updates } />
          </Col>
        </Row>
        <Row>
          <Col className="read-more text-right pt-3">
            <a href="/">View all company updates</a>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

const CompanyUpdateList = ({ items }) => {
  return items.map(item => {
    let alertClass = 'notification';
    if(item.isAlert)
      alertClass = 'alerts';
    return  <Alert className={ 'updates pl-4 pr-5 pt-4 ' + alertClass }  key={item.index}>
              <AlertType isAlert={ item.isAlert } />
              <strong>{ item.title }</strong>
              <p className="pt-1 pl-4">{ item.content }</p>
            </Alert>
    })
};

const AlertType = ({ isAlert }) => {
  if(isAlert) 
    return <FontAwesomeIcon icon="exclamation-circle" className="mr-2" />
  else
    return <FontAwesomeIcon icon="comment" className="mr-2"/>
}

export { AlertType };

export default CompanyUpdatesCard;
