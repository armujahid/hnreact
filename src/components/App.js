import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './404Page'
import NavBar from './NavBar'
import Stories from './Stories'

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="main-container">
            <NavBar />
            <div className="container">
              <Switch>
                <Route path='/' exact render={() => <Stories storytype="topstories" key="1"/>} />
                <Route path='/new' render={() => <Stories storytype="newstories" key="2"/>} />
                <Route path='/best' render={() => <Stories storytype="beststories" key="3"/>} />
                <Route path='/ask' render={() => <Stories storytype="askstories" key="4"/>} />
                <Route path='/show' render={() => <Stories storytype="showstories" key="5"/>} />
                <Route path='/jobs' render={() => <Stories storytype="jobstories" key="6"/>} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App
