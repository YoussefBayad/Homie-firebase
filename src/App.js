import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './Firebase/utils'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' >
          <h1>Home</h1>
        </Route>
        <Route  path='/login' >
          <h1>Login</h1>
        </Route>
        <Route  path='/signup' >
          <h1>Signup</h1>
        </Route>
        <Route  path='/chat' >
          <h1>Chat</h1>
        </Route>
        <Route  path='/admin' >
          <h1>Admin</h1>
        </Route>
        <Route  path='/profile' >
          <h1>profile</h1>
        </Route>
        <Route path='*' >
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
