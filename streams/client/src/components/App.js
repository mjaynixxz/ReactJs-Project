import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import StreamCreate from './Streams/StreamCreate';
import StreamShow from './Streams/StreamShow';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamList from './Streams/StreamList';





const App = () => {
    return(
        <div className="ui container" style={{ marginTop: '20px'}}>
        
        <Router history={history}>
            <div>
            <Header />
            <Switch>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/:id" exact component={StreamShow} />
                <Route path="/streams/delete/:id" exact component={StreamDelete} />
            </Switch>
            </div>
        </Router>
        </div>
    );
};

export default App;