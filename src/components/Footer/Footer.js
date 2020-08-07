import '../Footer/Footer.css';

import Link from '../Link/Link';
import React from 'react';

export default function Footer() {
  return (
    <div className="root-footer">
      <div className="container-footer">
        <span className="text-footer">© Your Company</span>
        <span className="spacer-footer">·</span>
        <Link className="link-footer" to="/">
          Home
        </Link>
        <span className="spacer-footer">·</span>
        <Link className="link-footer" to="/admin">
          Admin
        </Link>
        <span className="spacer-footer">·</span>
        <Link className="link-footer" to="/privacy">
          Privacy
        </Link>
        <span className="spacer-footer">·</span>
        <Link className="link-footer" to="/not-found">
          Not Found
        </Link>
      </div>
    </div>
  );
}
