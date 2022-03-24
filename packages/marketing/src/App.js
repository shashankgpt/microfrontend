import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import {StylesProvider} from '@material-ui/core/styles';

import LandingPage from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
            <Switch>
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/" component={LandingPage} />
            </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}