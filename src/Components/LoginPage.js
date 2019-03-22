import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom';
import './Components/GoogleAuth';

class LoginPage extends Component {

    render() {
        return ( < div className = "ui container" >
            <
            div className = "ui secondary pointing menu" >
            <
            Link to = "/"
            className = "item" >
            DashPage <
            /Link> < /
            div > < /div>
        );
    }
}


export default LoginPage;