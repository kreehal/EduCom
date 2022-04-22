//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Tutor from './components/Tutor.js';
import Resource from './components/Resource.js';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/tutors" component={Tutor} />
            <Route exact path="/resources" component={Resource} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
