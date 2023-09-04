import './Popup.css'
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/input';
import Button from '../../components/button/Button';
import close from '@assets/close.svg';

export default function Popup({ onClose }) {
    return (
        <div className='popup-content'>
            <div className='horizontalNit'>
                <PageTitle title={'Ingreso NIT'}/>
                <div className='CloseButton' onClick={onClose}>
                    <img className='plusClass' src={close}></img>
                </div>
            </div>
            <Input value={'Nombre cliente'} title={'Nombre'}/>
            <div className='horizontalNit2'>
                <Input value={'Nit cliente'} title={'Nit'}/>
                <Input value={'Dirección'} title={'Dirección'}/>
            </div>
            <div className='NitButtonContainer'>
                <Button text='Guardar' onClick={onClose}/>
            </div>
            
        </div>
      
    );
  }