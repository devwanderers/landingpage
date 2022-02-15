import { Route } from 'react-router-dom'
// import PrivateRoute from "./CustomRoutes/PrivateRoute"
// import PublicRoute from './CustomRoutes/PublicRoute'
import * as paths from '../constants/routerConstants'

const routes = [
    {
        name: 'LandingPage',
        path: paths.HomePath,
        route: Route,
        componentProps: { routes: [] },
        exact: true,
    },
    {
        name: 'Whitelist',
        path: paths.WhitelistPath,
        route: Route,
        componentProps: { routes: [] },
        exact: true,
    },
]

export default routes
