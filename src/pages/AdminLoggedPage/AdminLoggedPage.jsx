import React from 'react';
import NavBar from '@components/NavBar/NavBar';
import PropTypes from 'prop-types';
import AdminSideMenu from '@components/AdminSideMenu';
import styles from './AdminLoggedPage.module.css';
import { Route, Routes } from 'react-router-dom';
import UsersListPage from '@pages/usersListPage';
import IngresoPedido from '../IngresoPedidos';
import MedidasSaco from '../IngresoMedidasSaco/MedidasSaco';
import MedidasChaleco from '../MedidasChaleco/MedidasChalecho';
import MedidasPantalon from '../MedidasPantalon/MedidasPantalon';
import Facturacion from '../facturacion/facturacion';
import NuevoCliente from '../NuevoCliente/NuevoCliente';
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
          <Route path="/IngresoPedido" element={<IngresoPedido/>}/>
          <Route path="/MedidasSaco" element={<MedidasSaco/>}/>
          <Route path="/MedidasChaleco" element={<MedidasChaleco/>}/>
          <Route path="/MedidasPantalon" element={<MedidasPantalon/>}/>
          <Route path="/Facturacion" element={<Facturacion/>} />
          <Route path='/NuevoCliente' element={<NuevoCliente/>}/>

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
