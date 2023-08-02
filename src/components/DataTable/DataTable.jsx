import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '@components/Spinner';
import randomString from '@helpers/randomString';
import styles from './DataTable.module.css';

function DataTable({
  titles, isLoading, error, children,
}) {
  return (
    <div className={styles.dataTableContainer}>
      <table>
        <thead className={styles.header}>
          <tr>
            {titles?.map((title) => <th key={randomString(10)}>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr className={styles.loadingRow}>
              <td colSpan={titles?.length}>
                <Spinner />
              </td>
            </tr>
          ) }

          {!isLoading && !error && children}

          {!isLoading && error && (
            <tr className={styles.noResultsRow}>
              <td colSpan={titles?.length}>
                Sin resultados.
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

DataTable.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.any,
};

DataTable.defaultProps = {
  isLoading: false,
  error: null,
  children: null,
};
