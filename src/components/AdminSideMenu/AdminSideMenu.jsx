import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SideMenu from '@components/SideMenu';
import ordersListIcon from '@assets/pedidos.svg';
import SideMenuItem from '../SideMenuItem/SideMenuItem';
import styles from '../SideMenuItem/SideMenuItem.module.css';


function DropdownMenuItem({ image, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`${styles.sideMenuItem} ${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}>
      <div onClick={toggleDropdown}>
        <img src={image} alt="title" className={styles.iconDrop} />
        <span>{title}</span>
      </div>
      <ul className={styles.dropdownContent}>{children}</ul>
    </li>
  );
}


function AdminSideMenu({ name, sex }) {
  return (
    <SideMenu name={name} position="Admin" sex={sex}>
      <SideMenuItem image={ordersListIcon} title="Listado de pedidos" path="usuarios" />
       <SideMenuItem image={ordersListIcon} title="Ingreso de pedidos" path="IngresoPedido" />
       <SideMenuItem image={ordersListIcon} title="Crear nuevo cliente" path="NuevoCliente" />
       <DropdownMenuItem  image={ordersListIcon} title="Ingreso de medidas" path=""> 
          <SideMenuItem image={ordersListIcon} title="Medidas de saco" path="MedidasSaco" />
          <SideMenuItem image={ordersListIcon} title="Medidas de chaleco" path="MedidasChaleco" />
          <SideMenuItem image={ordersListIcon} title="Medidas de pantalón" path="MedidasPantalon" />
       </DropdownMenuItem>
       <SideMenuItem image={ordersListIcon} title= "Medidas de usuario" path="MedidasUsuario" />
       <SideMenuItem image={ordersListIcon} title="Facturación" path="Facturacion" />
    </SideMenu>
  );
}

export default AdminSideMenu;

AdminSideMenu.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
};
