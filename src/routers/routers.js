

import config from '~/config';

import Home from '~/Pages/Home/Home';
import Following from '~/Pages/Following/Following';
import Profile from '~/Pages/Profile/Profile';
import Upload from '~/Pages/Upload/Upload';

import { HeaderOnly } from '~/layouts';
import Live from '~/Pages/Live/Live';
import Discover from '~/Pages/Discover/Discover';
import Login from '~/Pages/Login/Login';

const publicRouter = [
    {
        path: config.routes.home,
        component: Home
    },
    {
        path: config.routes.following,
        component: Following
    },
    { path: config.routes.profile, component: Profile },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly
    },

    {
        path: config.routes.live,
        component: Live
    },
    {
        path: config.routes.discover,
        component: Discover
    },
    {
        path: config.routes.login,
        component: Login,


    },
]

const privateRoute = []

export { publicRouter, privateRoute }