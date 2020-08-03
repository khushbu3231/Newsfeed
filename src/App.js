import React, { Component } from 'react';

import DashBoard from './Components/DashBoard/DashBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
        <div className="App">
          {/* <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav">
                  <li className="nav-item active"><Link className="nav-link" to="/"> Top Headlines</Link> </li>
                  <li className="nav-item active"><Link className="nav-link" to="/"> Top Artices</Link> </li>
                </ul>
              </div>
            </nav>
          </header> */}
          <DashBoard/>
          {/* <Switch>
            <Route path='/' exact component={DashBoard} />
          </Switch> */}
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;
