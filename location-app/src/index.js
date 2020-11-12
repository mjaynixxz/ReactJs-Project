import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';



//Create a class based  component

class App extends React.Component {
    
    state = { lat: null, long: null, error: '' };

    componentDidMount() {
            window.navigator.geolocation.getCurrentPosition(position => 
            this.setState({ lat: position.coords.latitude, long: position.coords.longitude }), 
            err => this.setState({ error: err.message }));
    }
    
    

    render() {
        if (!this.state.error && this.state.lat) {
            return <div><SeasonDisplay lat = {this.state.lat} /></div>;
        }

        if (this.state.error && !this.state.lat) {
            return (<div>Error: {this.state.error}</div>);
        }
        return <div><Spinner loaderText = "Loading!!!"/></div>;
    };
}



//Render using react-dom
ReactDOM.render(<App />, document.querySelector('#root'));