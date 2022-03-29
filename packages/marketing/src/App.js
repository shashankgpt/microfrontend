import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import LandingPage from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
            <Switch>
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/" component={LandingPage} />
            </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}