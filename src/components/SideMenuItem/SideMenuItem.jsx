import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SideMenuItem.module.css';

function SideMenuItem({ image, title, path }) {
  return (
    <li className={styles.sideMenuItem}>
      <Link to={`${path}`}>
        <img src={image} alt="title" className={styles.icon} />
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default SideMenuItem;

SideMenuItem.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
