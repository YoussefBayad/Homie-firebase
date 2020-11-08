import React from 'react';
import {Switch, Route} from 'react-router-dom';
import WithAuth from "./hoc/withAuth"
import WithAdminAuth from "./hoc/withAdminAuth"
//pages
import Login from './pages/Login';
import Signup from './pages/Signup';

//layouts
import MainLayout from './layouts/MainLayout'

//style
import './default.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' >
          <WithAuth>
          <h1>Home</h1>
          </WithAuth>
        </Route>
        <Route  path='/login' >
          <WithAuth>
            <MainLayout>
              <Login/>
            </MainLayout>
          </WithAuth>
        </Route>
        <Route  path='/signup' >
          <WithAuth>
            <MainLayout>
              <Signup/>
            </MainLayout>
          </WithAuth>
        </Route>
        <Route  path='/chat' >
          <WithAuth>  
            <h1>Chat</h1>
          </WithAuth>
        </Route>
        <Route  path='/admin' >
        <WithAdminAuth>
          <h1>Admin</h1>
        </WithAdminAuth>
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
