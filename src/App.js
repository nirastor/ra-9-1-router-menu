import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './Menu/Menu';
import HomePage from './HomePage/HomePage';
import DriftPage from './DriftPage/DriftPage';
import TimeAttackPage from './TimeAttackPage/TimeAttackPage';
import ForzaPage from './ForzaPage/ForzaPage';


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}