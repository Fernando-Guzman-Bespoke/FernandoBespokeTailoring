import React from 'react';
import NavBar from '@components/NavBar/NavBar';
import PropTypes from 'prop-types';
import AdminSideMenu from '@components/AdminSideMenu';
import styles from './AdminLoggedPage.module.css';
import { Route, Routes } from 'react-router-dom';
import UsersListPage from '@pages/usersListPage';


function AdminLoggedPage({
  showNavBar, name, lastName, sex,
}) {
  return (
    <>
      {showNavBar && <NavBar />}
      <div className={styles.page}>
        <AdminSideMenu name={`${name} ${lastName}`} sex={sex} />
        <Routes>
          <Route path="/usuarios" element={<UsersListPage />} />
        </Routes>
      </div>
    </>
  );
}

export default AdminLoggedPage;

AdminLoggedPage.propTypes = {
  showNavBar: PropTypes.bool,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
};

AdminLoggedPage.defaultProps = {
  showNavBar: true,
};
