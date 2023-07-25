import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import getTokenPayload from '@helpers/getTokenPayload';
// import { serverHost } from '@/config';
// import useLogout from '@hooks/useLogout';
// import useFetch from '@hooks/useFetch';
import AdminLoggedPage from '@pages/AdminLoggedPage/AdminLoggedPage';

function LoggedPage({ }) {
  // const { callFetch, result, error } = useFetch();
  // const logout = useLogout();

  // useEffect(() => {
  //   callFetch({
  //     uri: `${serverHost}/user/validateToken`,
  //     headers: {
  //       authorization: token,
  //     },
  //     parse: false,
  //     method: 'POST',
  //   });
  // }, [token]);

  // useEffect(() => {
  //   if (!error) return;
  //   logout();
  // }, [error]);

  let component;
  // if (result && !error) {
  //   const {
  //     name, lastName, sex, isDoctor, isAdmin,
  //   } = getTokenPayload(token);

  //   if (IsUser && isAdmin) {
  //     component = <SuperLoggedPage name={name} lastName={lastName} sex={sex} />;
  //   } else if (isAdmin) component = <AdminLoggedPage name={name} lastName={lastName} sex={sex} />;
  //   else if (IsUser) component = <UserLoggedPage name={name} lastName={lastName} sex={sex} />;
  // }
  component = <AdminLoggedPage name={'Fernando'} lastName={'Guzmán'} sex={'M'} />;
  return component;
}

export default LoggedPage;

// LoggedPage.propTypes = {
//   token: PropTypes.string.isRequired,
// };
