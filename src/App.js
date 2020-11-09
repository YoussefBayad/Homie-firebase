import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';
//pages
import Login from './pages/Login';
import Signup from './pages/Signup';

//layouts
import MainLayout from './layouts/MainLayout';
import Container from './layouts/ContainerLayout';

//style
import './default.scss';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <WithAuth>
            <MainLayout>
              <Home />
            </MainLayout>
          </WithAuth>
        </Route>
        <Route path='/login'>
          <WithAuth>
            <Container>
              <Login />
            </Container>
          </WithAuth>
        </Route>
        <Route path='/signup'>
          <WithAuth>
            <Container>
              <Signup />
            </Container>
          </WithAuth>
        </Route>
        <Route path='/chat'>
          <WithAuth>
            <MainLayout>
              <h1>Chat</h1>
            </MainLayout>
          </WithAuth>
        </Route>
        <Route path='/admin'>
          <WithAdminAuth>
            <h1>Admin</h1>
          </WithAdminAuth>
        </Route>
        <Route path='/profile'>
          <h1>profile</h1>
        </Route>
        <Route path='*'>
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
