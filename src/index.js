import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';
console.log(MICRO_API_DEVSITE1_BASEURL);

ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById('root')
)