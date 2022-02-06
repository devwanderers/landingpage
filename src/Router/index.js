import React, { Component } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import loadable from '@loadable/component'
import { createBrowserHistory } from 'history'
import routes from './routes'

const history = createBrowserHistory()

class AppRouter extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <route.route
                                key={`route-${route.name}`}
                                path={route.path}
                                exact={route.exact}
                                component={() => {
                                    const Component = loadable(() =>
                                        import(`../views/${route.name}`)
                                    )
                                    return (
                                        <Component {...route?.componentProps} />
                                    )
                                }}
                                // component={() => import(`../${route.name}`)}
                            />
                        )
                    })}
                </Switch>
                {/* <Switch>{routes.map((route, index) => <Route path render{route.component})}</Switch> */}
            </Router>
        )
    }
}

export default connect((state) => ({}), null)(AppRouter)
