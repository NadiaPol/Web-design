import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from '../pages/MainPage';
import Calculator from '../pages/Calculator';
import Registration from '../pages/Registration';
import SignIn from '../pages/SignIn';
import UserInfo from '../pages/UserInfo';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/calculator'>
        <Calculator/>
      </Route>
      <Route path='/info'>
        <UserInfo/>
      </Route>
      <Route path='/signIn'>
        <SignIn/>
      </Route>
      <Route path='/registration'>
        <Registration/>
      </Route>
      <Route path=''>
        <MainPage/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
