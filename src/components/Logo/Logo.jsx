import React from 'react';
import logo from '@assets/traje.png';
import { appName } from '@/config';
import { logo as logoClass } from './Logo.module.css';

function Logo(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <div {...props} className={`${logoClass} ${props?.className}`}>
      <img src={logo} alt="FernandoBespoke" className="logo-image" />
      <span className="logo-title">{appName}</span>
    </div>
  );
}

export default Logo;
