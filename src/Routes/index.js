import News from '../Containers/News';
import Newest from '../Containers/Newest';
import {Route} from 'react-router-dom';
import React from 'react';

const routes = [
    {
        path : '/news/',
        component : News 
    },
    {
        path : '/newest/:id/',
        component : Newest 
    }
]
export default routes;