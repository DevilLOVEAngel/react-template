import '../Header/Header.css';

import Link from '../Link/Link';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import logoUrl from './logo-small.png';
import logourl2x from './logo-small@2x.png';

export default function Header() {
  return (
    <div className="root-header">
      <div className="container-header">
        <Navigation />
        <Link className="brand-header" to="/">
          <img
            src={logoUrl}
            srcSet={`${logourl2x} 2x`}
            width="38"
            height="38"
            alt="React"
          />
          <span className="brandTxt-header">Your company</span>
        </Link>
        <div className="banner-header">
          <h1 className="bannerTitle-header">React</h1>
          <p className="bannerDesc-header">Complex web apps made easy</p>
        </div>
      </div>
    </div>
  );
}
