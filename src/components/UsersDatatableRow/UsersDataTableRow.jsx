import React from 'react';
import PropTypes from 'prop-types';
import PeopleRowItem from '@components/PeopleRowItem';
import { useNavigate } from 'react-router-dom';
import styles from './UsersDataTableRow.module.css';

function UsersDataTableRow({
  userId, doctorId, index, fullName, sex, cui, passport,
}) {
  const navigate = useNavigate();

  const handleRedirectToPatientRecord = (id) => {
    navigate(`/usuarios/${id}`);
  };

  return (
    <tr onClick={() => handleRedirectToPatientRecord(userId)} className={styles.row}>
      <td>{index}</td>
      <PeopleRowItem name={fullName} sex={sex} />
      <td>{cui ?? passport}</td>
      <td>{doctorId ? 'Doctor' : 'Administrador'}</td>
    </tr>
  );
}

export default UsersDataTableRow;

UsersDataTableRow.propTypes = {
  userId: PropTypes.number.isRequired,
  doctorId: PropTypes.number,
  index: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  cui: PropTypes.string,
  passport: PropTypes.string,
};

UsersDataTableRow.defaultProps = {
  cui: null,
  passport: null,
  doctorId: null,
};
