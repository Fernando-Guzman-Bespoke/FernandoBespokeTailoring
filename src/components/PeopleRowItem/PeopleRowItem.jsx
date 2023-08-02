import React from 'react';
import PropTypes from 'prop-types';
import maleAvatar from '@assets/maleUserAvatar.svg';
import femaleAvatar from '@assets/femaleUserAvatar.svg';
import styles from './PeopleRowItem.module.css';

function PeopleRowItem({ name, sex }) {
  return (
    <td className={styles.peopleRowItem}>
      <img src={sex === 'M' ? maleAvatar : femaleAvatar} alt="User avatar" />
      <span>{name}</span>
    </td>
  );
}

export default PeopleRowItem;

PeopleRowItem.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
};

PeopleRowItem.defaultProps = {

};
