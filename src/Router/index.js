import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import loadable from '@loadable/component'
import routes from './routes'

const AppRouter = () => {
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
            </Switch>
            {/* <Switch>{routes.map((route, index) => <Route path render{route.component})}</Switch> */}
        </Router>
    )
}
export default AppRouter
