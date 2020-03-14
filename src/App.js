import React from 'react';
import './App.css';
import { Home, Projects } from './screens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Content } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Content>
            <Route exact path="/projects" component={Projects} />
          </Content>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
