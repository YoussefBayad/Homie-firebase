import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login';
import './default.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' >
          <h1>Home</h1>
        </Route>
        <Route  path='/login' >
          <MainLayout>
            <Login/>
          </MainLayout>
        </Route>
        <Route  path='/signup' >
          <MainLayout>
            <h1>Signup</h1>
          </MainLayout>
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
          <MainLayout>
            <h1>404</h1>
          </MainLayout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
