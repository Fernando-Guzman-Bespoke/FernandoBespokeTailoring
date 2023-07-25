import React from 'react';
import NavBar from '@components/NavBar/NavBar';
import PropTypes from 'prop-types';
import AdminSideMenu from '@components/AdminSideMenu';
import styles from './AdminLoggedPage.module.css';

function AdminLoggedPage({
  showNavBar, name, lastName, sex,
}) {
  return (
    <>
      {showNavBar && <NavBar />}
      <div className={styles.page}>
        <AdminSideMenu name={`${name} ${lastName}`} sex={sex} />
        {/* <Routes>
          <Route path="/usuarios" element={<UsersListPage />} />
          <Route path="/usuarios/nuevo" element={<UserRegistrationPage />} />
          <Route path="/usuarios/:userId" element={<UserRegistrationPage />} /> */}
          {/* <Route path="/usuarios/:id" element={<UserRegistrationPage userId={id} />} /> */}
          {/* <Route path="/tiposExamen" element={<TestTypeListPage />} />
          <Route path="/tiposExamen/nuevo" element={<TypeTestRegistrationPage />} />
          <Route path="/doctores" element={<DoctorsListPage />} />
          <Route path="/suministros" element={<SuppliesListPage />} />
          <Route path="/suministros/nuevo" element={<NewSupplyTypePage />} />
          <Route path="/centroMedico" element={<MedicCenterListPage />} />
          <Route path="/reportes" element={<ReportsPage />} />
          <Route path="/centroMedico/:medicalCenterId/nuevoStock" element={<AddSuppliesToStockPage />} />
          <Route path="/suministros/porTerminarse" element={<SuppliesNearlyDepletedPage />} />
          <Route path="/centroMedico/:medicalCenterId" element={<MedicalCenterDataPage />} />
          <Route path="/centroMedico/:medicalCenterId/stock/:supplyId" element={<UpdateSuppliesInStockPage />} />
        </Routes> */}
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
