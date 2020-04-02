import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import BaseLayout from './components/layout/BaseLayout';
import Blogs from './components/Blogs';
import NoMatch from './components/NoMatch';
import Forms from './components/Forms';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Redirect from='/aboutus' to='/' />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/contactus' component={ContactUs} />
        <Route exact path='/blogs' component={Blogs} />
        <Route path='/blogs/:blogID' component={Blogs} />
        <Route path='/forms' component={Forms} />
        <Route component={NoMatch} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
);
