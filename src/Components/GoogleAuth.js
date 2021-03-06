import React from 'react';
import {
    connect
} from 'react-redux';
import {
    signIn,
    signOut
} from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() { //reference google api library https://developers.google.com/api-client-library/javascript/reference/referencedocs#api-requests
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '821737318106-l5isnk4mkp6fffr76c4s9cpl3fo988ip.apps.googleusercontent.com',
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
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return ( <
                button onClick = {
                    this.SignOutClick
                }
                className = "ui red goodle button" >
                <
                i className = "google icon" / >
                Sign Out <
                /button>
            );
        } else {
            return ( <
                button onClick = {
                    this.SignInClick
                }
                className = "ui red goodle button" > Sign In with Google <
                i className = "google icon" / > <
                /button>
            );
        }
    }
    render() {
        return ( <
            div > {
                this.renderAuthButton()
            } < /div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignIn: state.auth.isSignIn
    };
}

export default connect(mapStateToProps, {
    signIn,
    signOut
}(GoogleAuth));