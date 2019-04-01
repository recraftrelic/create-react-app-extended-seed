import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Login from './Login'
import Chat from './Chat'

const history = createBrowserHistory()

const Routes = () => 
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/chat" component={Chat} />
        </Switch>
    </Router>

export default Routes
