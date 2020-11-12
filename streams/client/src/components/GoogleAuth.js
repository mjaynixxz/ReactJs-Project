import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client: auth2', ()=> { window.gapi.client.init({ clientId: '161676691618-15m7udsh761k1732gech1uvoubtisn9k.apps.googleusercontent.com', 
        scope: 'email'
    }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
    });

});
    }

onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            return this.props.signIn(this.auth.currentUser.get().getId());
        } else {
        return this.props.signOut();
        }
    }


    
    onSignInClick = () => {
        this.auth.signIn();
    }


    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderButtonSignedIn () {
        if (this.props.isSignedIn === null) {
            
            return null;
        }
        else if (this.props.isSignedIn) {
            
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out</button>
            );
        }

        else { 
            return (
            <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign In with Google</button>
        );
    }
}

    render() {
        return(
            <div style={{ display: 'inline-block', marginRight: '10px'}}>{this.renderButtonSignedIn()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};


export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);