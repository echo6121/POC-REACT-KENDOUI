import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import '@progress/kendo-theme-bootstrap/dist/all.css';
import './App.scss';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle, faComment } from '@fortawesome/free-solid-svg-icons'

library.add(faExclamationCircle, faComment);

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="wrapper">
          <Sidebar />
          <Router>
            <Dashboard />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;