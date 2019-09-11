import React, { Component } from 'react';
import {Button,Modal} from 'antd';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import './App.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' component={Admin} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App
