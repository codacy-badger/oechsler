import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Route components
import { Home } from './home/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route render={() => 404} />
            </Switch>
        </BrowserRouter>
    );
};
