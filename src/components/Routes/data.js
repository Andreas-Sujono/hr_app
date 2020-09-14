import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const componentRoutes = [
    {
        type: 'public',
        path: `/`,
        exact: true,
        hidden: true,
        render() {
            return <Redirect to="/login" />;
        },
    },
    {
        type: 'public',
        path: `/login`,
        exact: true,
        component: lazy(() => import('components/Login')),
    },
];


export default componentRoutes;
