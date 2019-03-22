import React, {
    Component
} from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';
import openSky from './apis/openSky';
import LoginPage from './LoginPage';
import DashBoardList from './dashboard/DashBoardList';
import FlightShow from './dashboard/FlightShow';

class App extends Component {

    render() {
        return ( <
            div className = "ui container" >

            <
            BrowserRouter >
            <
            LoginPage / >
            <
            div >
            <
            Route path = "/"
            exact component = {
                LoginPage
            }
            /> <
            Route path = "/dashboard/list"
            exact component = {
                DashBoardList
            }
            /> <
            Route path = "/dashboard/show"
            exact component = {
                FlightShow
            }
            /> < /
            div > < /
            BrowserRouter > <
            /div>
        );
    }
}

export default App;