import React from 'react';
import Logo from '@components/Logo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar({ showOptions }) {
  return (
    <div className={styles.navBar}>
      <Logo className={styles.logo} />
      {
        showOptions && (
          <ul className={styles.menu}>
            <li><Link to="/doctor">Modo doctor</Link></li>
            <li><Link to="/">Modo admin</Link></li>
          </ul>
        )
      }
    </div>
  );
}

export default NavBar;

NavBar.propTypes = {
  showOptions: PropTypes.bool,
};

NavBar.defaultProps = {
  showOptions: false,
};
