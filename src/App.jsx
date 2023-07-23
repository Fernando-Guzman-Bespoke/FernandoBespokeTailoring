// import './App.css'
// import MeasurePage from './pages/MeasurePage'
// // import InventoryPage from './pages/InventoryPage'
// // import OrderHandlingPage from './pages/OrderHandlingPage'
// //import PricePage from './pages/PricePage'
// //import OrderHandlingPage from './pages/OrderHandlingPage'
// // import AgregarTela from './pages/AgregarTela'
// //import MuestrarioTelas from './pages/MuestrarioDisenos'
// import IngresoSaco from './pages/IngresoSaco'
// import Login from './pages/Login'

// function App() {

//   return (
//     <>
//        {/* <MeasurePage></MeasurePage>  */}
//       {/* <InventoryPage></InventoryPage> */}
//       {/* <OrderHandlingPage></OrderHandlingPage>  */}
//       {/* <AgregarTela></AgregarTela> */}
//       {/* <MuestrarioTelas></MuestrarioTelas> */}
//       <Login></Login>
//        {/*<PricePage></PricePage>}
//       {/*<AgregarTela></AgregarTela>*/}
//       {/* <MuestrarioTelas></MuestrarioTelas> */}
//       {/* <IngresoSaco></IngresoSaco> */}
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MeasurePage from './pages/MeasurePage'
// import './App.css'
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/measure" component={MeasurePage} />
      <Redirect from="/" to="/Login" />
    </Router>
  );
}

export default App
