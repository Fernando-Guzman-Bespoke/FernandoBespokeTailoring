import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import UsersDataTable from '@components/UsersDataTable';
import { useNavigate } from 'react-router';
import styles from './UsersListPage.module.css';

function UsersListPage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const redirectToRegisterForm = () => {
    navigate('/usuarios/nuevo');
  };

  return (
    <div className={styles.usersListPage}>
      {/* <SearchHeader
        setSearchQueryHandler={setQuery}
        title="Listado de Usuarios"
        buttonText="Nuevo"
        showButton
        onClickHandler={redirectToRegisterForm}
      /> */}
      <UsersDataTable search={query} onClickHandler={redirectToRegisterForm} />
    </div>
  );
}

export default UsersListPage;

UsersListPage.propTypes = {};

UsersListPage.defaultProps = {};
