import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <Fragment>
      <div>404 Not Found</div>
      <NavLink to="/">Click here </NavLink> to go back to home page
    </Fragment>
  );
}

export default NotFound
