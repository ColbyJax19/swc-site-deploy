import React from 'react';
import Logo from '../components/Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Nav />
    </div>
  );
}
