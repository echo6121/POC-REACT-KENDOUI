import React from 'react';
import './Sidebar.scss';
import Logo from '../assets/lereta-logo@2x.png';
import DashboardIcon from '../assets/icon-dashboard-white.svg';
import ApplicationIcon from '../assets/icon-applications-white.svg';
import ReportIcon from '../assets/icon-reporting-white.svg';
import SearchIcon from '../assets/icon-search-white.svg';

const Sidebar = props => (
  <header>
    <nav id="sidebar-wrapper" >
        <ul className="sidebar-nav text-center">
          <li className="sidebar-brand pt-3 pb-2">
            <a href="/"><img src={ Logo } alt="lereta-logo" width="80"/></a>
          </li>
          <li className="mt-5">
            <a href="/">
              <img src={ DashboardIcon } alt="dashboard-logo" />
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ ApplicationIcon } alt="Application-logo" />
              <p>Application</p>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ ReportIcon } alt="Report-logo" />
              <p>Reporting</p>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ SearchIcon } alt="Search-logo" />
              <p>Search</p>
            </a>
          </li>
        </ul>
    </nav>
  </header>
)

export default Sidebar;
