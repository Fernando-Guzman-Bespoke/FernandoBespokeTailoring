import './App.css'
import MeasurePage from './pages/MeasurePage'
import MuestrarioDisenos from './pages/MuestrarioDisenos'
import InventoryPage from './pages/InventoryPage'
import OrderHandlingPage from './pages/OrderHandlingPage'
import AgregarTela from './pages/AgregarTela'
import MuestrarioTelas from './pages/MuestrarioDisenos'


function App() {

  return (
    <>
      <MuestrarioDisenos></MuestrarioDisenos>
      <MeasurePage></MeasurePage> 
      <InventoryPage></InventoryPage> 
      <OrderHandlingPage></OrderHandlingPage> 
      <AgregarTela></AgregarTela>
      <MuestrarioTelas></MuestrarioTelas> 
    </>
  )
}

export default App
