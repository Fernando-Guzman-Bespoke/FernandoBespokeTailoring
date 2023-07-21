import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css'
import MeasurePage from './pages/MeasurePage'
// import InventoryPage from './pages/InventoryPage'
//import OrderHandlingPage from './pages/OrderHandlingPage'
// import AgregarTela from './pages/AgregarTela'
import MuestrarioTelas from './pages/MuestrarioDisenos'

function App() {
  return (
    <Router>
      <Route path="/muestrario" component={MuestrarioTelas} />
      <Route path="/medidas" component={MeasurePage} />
      <Redirect from="/" to="/medidas" />
    </Router>
  );
}

export default App
