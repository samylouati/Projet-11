import React from "react";

import { Link } from "react-router-dom";
import LOGO from '../assets/images/argentBankLogo.webp';

import '@fortawesome/fontawesome-free/css/all.min.css';

export function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={LOGO}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}
