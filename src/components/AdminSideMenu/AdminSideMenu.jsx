import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from '@components/SideMenu';
import ordersListIcon from '@assets/pedidos.svg';
// import reportsIcon from '@assets/reportIcon.svg';
// import noStock from '@assets/noStock.svg';
// import TestTypeIcon from '@assets/TestTypeIcon.svg';
// import suppliesListIcon from '@assets/suppliesListIcon.svg';
// import medicalCentersListIcon from '@assets/medicalCentersListIcon.svg';
import SideMenuItem from '../SideMenuItem/SideMenuItem';

function AdminSideMenu({ name, sex }) {
  return (
    <SideMenu name={name} position="Admin" sex={sex}>
      <SideMenuItem image={ordersListIcon} title="Listado de Pedidos" path="usuarios" />
       <SideMenuItem image={ordersListIcon} title="Ingreso de Pedidos" path="IngresoPedido" />
       <SideMenuItem image={ordersListIcon} title="Ingreso de Medidas de Saco" path="MedidasSaco" />
       <SideMenuItem image={ordersListIcon} title="Ingreso de Medidas de Chaleco" path="MedidasChaleco" />
       <SideMenuItem image={ordersListIcon} title="Ingreso de Medidas de Pantalón" path="MedidasPantalon" />
       <SideMenuItem image={ordersListIcon} title="Facturación" path="Facturacion" />
       <SideMenuItem image={ordersListIcon} title="Crear Nuevo Cliente" path="NuevoCliente" />

      {/*<SideMenuItem image={suppliesListIcon} title="Lista de suministros" path="suministros" />
      <SideMenuItem image={reportsIcon} title="Reportes" path="reportes" />
      <SideMenuItem image={noStock} title="Suministros por agotar" path="/suministros/porTerminarse" />
      <SideMenuItem image={TestTypeIcon} title="Lista de tipos de examen" path="tiposExamen" /> */}
    </SideMenu>
  );
}

export default AdminSideMenu;

AdminSideMenu.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
};
