import '../Navigation/Navigation.css';

import Link from '../Link/Link';
import React from 'react';

export default function Navigation() {
  return (
    <div className="root-navigation" role="navigation">
      <Link className="link-navigation" to="/about">
        About
      </Link>
      <Link className="link-navigation" to="/contact">
        Contact
      </Link>
      <span className="spacer-navigation"> | </span>
      <Link className="link-navigation" to="/login">
        Log in
      </Link>
      <span className="spacer-navigation">or</span>
      <Link className={`link-navigation, highlight-navigation`} to="/register">
        Sign up
      </Link>
    </div>
  );
}
