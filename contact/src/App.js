import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Contact from './pages/Contact'
import ContactDetail from './pages/ContactDetail'

export default function App() {
  return (
    <div>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Contact}></Route>
          <Route path="/detail/:id" component={ContactDetail}></Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
