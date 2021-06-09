import './App.scss'
import NavbarC from './components/Navbar/NavbarC';
import Sidebar from './components/Sidebar/Sidebar';
import MessagesC from './components/Messages/MessagesC';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Notifications from './components/Notifications/Notifications';
import Bookmarks from './components/Bookmarks/Bookmarks';
import UsersC from './components/Users/UsersC';
import ProfileC from './components/Profile/ProfileC';
import Auth from './components/Auth/Auth';
import {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initApp} from "./redux/reducers/app-reducer";
import Preloader from "./components/common/Loader/Preloader";

const App = ({ initialized, initApp }) => {
    useEffect(() => {
        initApp()
    },[]);

    return (
        !initialized ? <Preloader /> : <>
            <NavbarC />
            <div className='main-wrapper'>
                <Route path='/home' component ={Home} />
                <Route path='/explore' component ={Explore} />
                <Route path='/notifications' component ={Notifications} />
                <Route path='/messages' render ={() => <MessagesC />} />
                <Route path='/bookmarks' component ={Bookmarks} />
                <Route path='/users' component ={UsersC} />
                <Route path='/profile/:userId?' render ={() => <ProfileC />} />
                <Route path='/login' render ={() => <Auth />} />
            </div>
            <Sidebar />
        </>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter,connect(mapStateToProps, { initApp }))(App)