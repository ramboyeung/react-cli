import React from 'react';
import { HashRouter,Switch,Route,Redirect } from 'react-router-dom';
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import My from "../pages/My";

// function isLogin(AuthComponent) {
//   return localStorage.getItem('mytoken')?<AuthComponent />:<Redirect to="/login" />
// }

function RouterConfig() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/my" component={My} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/" to="/home" />
        <Redirect to="/404" />
      </Switch>
    </HashRouter>
  )
}
export default RouterConfig;
