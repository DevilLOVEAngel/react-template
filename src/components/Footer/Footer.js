import '../Footer/Footer.css';

import Link from '../Link/Link';
import React from 'react';

export default function Footer() {
  return (
    <div className="root">
      <div className="container">
        <span className="text">© Your Company</span>
        <span className="spacer">·</span>
        <Link className="link" to="/">
          Home
        </Link>
        <span className="spacer">·</span>
        <Link className="link" to="/admin">
          Admin
        </Link>
        <span className="spacer">·</span>
        <Link className="link" to="/privacy">
          Privacy
        </Link>
        <span className="spacer">·</span>
        <Link className="link" to="/not-found">
          Not Found
        </Link>
      </div>
    </div>
  );
}
