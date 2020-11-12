import React, {  useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './utils/history';
import Context from './utils/context';
import AuthCheck from './utils/authcheck';

import Home from './hooks/Home';
import Header from './hooks/Header';
import HooksContainer from './hooks/Hook1';
import Callback from './hooks/Callback';
import HooksForm from './hooks/Hooks_form';
import PrivateComponent from './hooks/Privatecomponent';
import Profile from './hooks/Profile';


const PrivateRoute = ({component: Component, auth}) => (
    <Route render={props => auth === true
        ? <Component auth={auth} {...props} />
        : <Redirect to={{pathname: '/'}} />
        } />
)


const Routes = () => {
    const context = useContext(Context);

    return(
        <div>
            <Router history={history}>
                <Header />
                <br />
                <br />
            
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/' component={HooksForm} />
                    <Route path='/hooksform' component={Profile} />
                    <Route path='/profile' component={HooksContainer} />
                    <Route path='/authcheck' component={AuthCheck} />
                <PrivateRoute path='/privaateroute' 
                              auth={context.authState}
                              component={PrivateComponent} />
                        
               
                <PrivateRoute path='/profile' 
                              auth={context.authState}
                              component={Profile} />
                <Route path='/callback'
                render={props => {context.handleAuth(props); return <Callback />}} />
               
             </Switch>
            </div>
        
            </Router>
        </div>
    );
}

export default Routes;