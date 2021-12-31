import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppRoute} from 'config/RoutesConfig';

function App() {
  return(
    <Router>
      <AppRoute/>
    </Router>
  )
}

export default App;
