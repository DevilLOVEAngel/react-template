import '../ErrorBoundaries/Error.css';

import { Link } from '@reach/router';
import React from 'react';

export default function Error() {
  return (
    <div className="container">
      <h1>
        There was an error with this listing. <Link to="/">Click here</Link> to
        back to the home page or wait five seconds.
      </h1>
    </div>
  );
}
