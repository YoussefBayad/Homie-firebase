import React from 'react';
import { Switch, Route } from 'react-router-dom';

// HOC and hooks
import WithAuth from './hoc/withAuth';
import WithNoAuth from './hoc/withNoAuth';
import WithAdminAuth from './hoc/withAdminAuth';
import useAuthListener from './hooks/useAuthListener';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import FourOFour from './pages/404';
import NotificationsPage from './pages/Notifications';

//layouts
import MainLayout from './layouts/MainLayout';
import Container from './layouts/ContainerLayout';

//style
import './default.scss';

function App() {
  useAuthListener();
  return (
    <>
      <Switch>
        <WithAuth exact path='/'>
          <MainLayout>
            <Home />
          </MainLayout>
        </WithAuth>
        <WithNoAuth path='/login'>
          <Container>
            <Login />
          </Container>
        </WithNoAuth>
        <WithNoAuth path='/signup'>
          <Container>
            <Signup />
          </Container>
        </WithNoAuth>
        <WithAuth path='/chat'>
          <MainLayout>
            <h1>Chat</h1>
          </MainLayout>
        </WithAuth>
        <WithAuth path='/notification'>
          <MainLayout>
            <NotificationsPage />
          </MainLayout>
        </WithAuth>
        <WithAuth path='/search'>
          <MainLayout>
            <h1>search</h1>
          </MainLayout>
        </WithAuth>
        <WithAuth path='/admin'>
          <WithAdminAuth>
            <h1>Admin</h1>
          </WithAdminAuth>
        </WithAuth>
        <WithAuth path='/profile/:id'>
          <MainLayout>
            <Profile />
          </MainLayout>
        </WithAuth>
        <Route path='*'>
          <Container>
            <FourOFour />
          </Container>
        </Route>
      </Switch>
    </>
  );
}

export default App;
