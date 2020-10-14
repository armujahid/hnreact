import React from 'react';
import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      <div>404 Not Found</div>
      <Link href="/">
        <a>Click here</a>
      </Link>{' '}
      to go back to home page
    </>
  );
}

export default NotFound
