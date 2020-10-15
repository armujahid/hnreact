import { Fragment } from 'react';
import Link from 'next/link'

const NotFound = () => {
  return (
    <Fragment>
      <div>404 Not Found</div>
      <Link to="/">Click here </Link> to go back to home page
    </Fragment>
  );
}

export default NotFound
