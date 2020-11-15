import React from 'react';
import { Switch, Route } from 'react-router-dom';

// HOC and hooks
import WithAuth from './hoc/withAuth';
import WithNoAuth from './hoc/withNoAuth';
import WithAdminAuth from './hoc/withAdminAuth';
import useAuthListener from './hooks/useAuthListener';
import usePostsListener from './hooks/usePostsListener';
import useLikesListener from './hooks/useLikesListener';

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
            <h1>notification</h1>
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
            <h1>Profile</h1>
          </MainLayout>
        </WithAuth>
        <Route path='*'>
          <h1>404</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
