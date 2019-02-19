import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Main from './Main'

const history = createBrowserHistory()

const Routes = () => 
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    </Router>

export default Routes
