import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DataTable from '@components/DataTable';
import randomString from '@helpers/randomString';
import useFetch from '../../hooks/useFetch';
import { serverHost } from '../../config';
import useToken from '../../hooks/useToken';
import UsersDataTableRow from '../UsersDataTableRow';

function UsersDataTable({ search }) {
  const {
    callFetch, result, error, loading,
  } = useFetch();
  const token = useToken();

  useEffect(() => {
    let uri = `${serverHost}/user/list`;
    if (search) uri += `?search=${search}`;
    callFetch({ uri, headers: { authorization: token } });
  }, [search]);

  return (
    <DataTable
      titles={['No.', 'Cliente', 'Fecha de Pedido', 'Fecha de Entrega', 'Total']}
      isLoading={loading}
      error={error || !(result?.length > 0)}
    >
      {result?.map((data, index) => (
        <UsersDataTableRow key={randomString(10)} userId={data.user_id} doctorId={data.doctor_id} index={index + 1} fullName={`${data.name}`} sex={data.sex} cui={data.cui} passport={data.passport} />
      ))}
    </DataTable>
  );
}

export default UsersDataTable;

UsersDataTable.propTypes = {
  search: PropTypes.string,
};

UsersDataTable.defaultProps = {
  search: null,
};
