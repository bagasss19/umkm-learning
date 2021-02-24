import './App.css';
import Navbar from './components/navbar'
import Home from './pages/home'
import News from './pages/news'
import Legalitas from './pages/legalitas'
import About from './pages/about'
import Materi from './pages/materi'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
           <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/legalitas" component={Legalitas} />
          <Route path="/about" component={About} />
          <Route path="/materi" component={Materi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
