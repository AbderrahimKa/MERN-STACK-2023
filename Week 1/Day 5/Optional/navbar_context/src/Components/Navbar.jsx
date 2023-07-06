import React, { useContext } from 'react';
import { NameContext } from './Wrapper';
import './Navbar.css';

const Navbar = () => {
  const { name } = useContext(NameContext);

  return <h1 className="navbar-title">Hi, {name}!</h1>;
};

export default Navbar;
