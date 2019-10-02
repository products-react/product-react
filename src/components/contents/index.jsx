import React, { Component } from 'react';
import Home from '../../pages/home';
import {BrowserRouter as HashRouter,Route,Switch} from 'react-router-dom';
import Detail from '../../pages/detail';
class Content extends Component {
    render() { 
        return ( 
        <div>
             <HashRouter>
                 <Switch>
                    <Route exact path='/:id(\d+)' component={Detail} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </HashRouter>
        </div> );
    }
}
 
export default Content;

