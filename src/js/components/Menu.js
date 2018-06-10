import React from 'react';
import {NavLink} from "react-router-dom";

import 'components/ui/Menu.scss'

const selectedStyle = {
  color: '#FFF',
  borderBottomWidth: '2px',
  borderBottomColor: '#00408B',
  borderBottomStyle: 'solid'
}

const Menu = ({match}) =>
  <nav className="nav menu">
    <div className="wrapper d-flex">
      <NavLink to="/" exact className="nav-link" activeStyle={selectedStyle}>
        My Tasks
      </NavLink>
      <NavLink to="/state/in-progress" className="nav-link" activeStyle={selectedStyle}>
        In Progress
      </NavLink>
      <NavLink to="/state/completed" className="nav-link" activeStyle={selectedStyle}>
        Completed
      </NavLink>
    </div>
  </nav>

export default Menu