import React from 'react';
import './App.css';
import { Home, Projects } from './screens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Content } from './components';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <CSSTransition
            in={true}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <Content className="page">
              <Route exact path="/projects" component={Projects} />
            </Content>
          </CSSTransition>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
