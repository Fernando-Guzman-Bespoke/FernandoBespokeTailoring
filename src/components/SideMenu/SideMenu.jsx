import React from 'react';
import PropTypes from 'prop-types';
import logoutIcon from '@assets/logoutIcon.svg';
import maleAvatar from '@assets/adminuser.svg';
import femaleAvatar from '@assets/adminuser.svg';
import useLogout from '@hooks/useLogout';
import styles from './SideMenu.module.css';

function SideMenu({
  children, name, position, sex,
}) {
  const logout = useLogout();

  return (
    <aside className={styles.sideMenu}>
      <div className={styles.menuHeader}>
        <img src={sex === 'M' ? maleAvatar : femaleAvatar} alt="User" />
        <div className={styles.userData}>
          <span className={styles.userName}>{name}</span>
          <span className={styles.userPosition}>{position}</span>
        </div>
      </div>
      <hr />
      <ul className={styles.itemsList}>
        {children}
      </ul>

      <button type="button" className={styles.logout} onClick={logout}>
        <img src={logoutIcon} alt="title" className={styles.icon} />
        <span>Cerrar Sesión</span>
      </button>
    </aside>
  );
}

export default SideMenu;

SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
};
