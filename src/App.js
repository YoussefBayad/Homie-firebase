import React from 'react';
import { Switch, Route } from 'react-router-dom';

// HOC and hooks
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';
import useAuthListener from './hooks/useAuthListener';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

//layouts
import MainLayout from './layouts/MainLayout';
import Container from './layouts/ContainerLayout';

//style
import './default.scss';

function App() {
  // useAuthListener();

  return (
    <>
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
        <Route path='/notification'>
          <WithAuth>
            <MainLayout>
              <h1>notification</h1>
            </MainLayout>
          </WithAuth>
        </Route>
        <Route path='/search'>
          <WithAuth>
            <MainLayout>
              <h1>search</h1>
            </MainLayout>
          </WithAuth>
        </Route>
        <Route path='/admin'>
          <WithAdminAuth>
            <h1>Admin</h1>
          </WithAdminAuth>
        </Route>
        <Route path='/profile'>
          <WithAuth>
            <MainLayout>
              <h1>Profile</h1>
            </MainLayout>
          </WithAuth>
        </Route>
        <Route path='*'>
          <h1>404</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
