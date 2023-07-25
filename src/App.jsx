import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css'
import { SessionProvider } from '@context/SessionContext';
import MainPage from '@pages/MainPage';

function App() {
  return (
    <div className="app">
      <Router>
        <SessionProvider>
          <MainPage />
        </SessionProvider>
      </Router>
    </div>
  );
}

export default App;
