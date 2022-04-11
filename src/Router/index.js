import React from 'react'
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
} from 'react-router-dom'
import loadable from '@loadable/component'
import routes from './routes'
import { HomePath } from '../constants/routerConstants'

const AppRouter = () => {
    console.log('router')
    return (
        <Router>
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
                                return <Component {...route?.componentProps} />
                            }}
                            // component={() => import(`../${route.name}`)}
                        />
                    )
                })}
                <Route component={() => <Redirect to={HomePath} />} />
            </Switch>
            {/* <Switch>{routes.map((route, index) => <Route path render{route.component})}</Switch> */}
        </Router>
    )
}
export default AppRouter
