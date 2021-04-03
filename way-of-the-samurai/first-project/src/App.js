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
import Login from './components/Login/Login';

const App = () => {
  return (
    <>
      <NavbarC />
      <div className='main-wrapper'>
        <Route path='/home' component ={Home} />
        <Route path='/explore' component ={Explore} />
        <Route path='/notifications' component ={Notifications} />
        <Route path='/messages' render ={() => <MessagesC />} />
        <Route path='/bookmarks' component ={Bookmarks} />
        <Route path='/users' component ={UsersC} />
        <Route path='/profile/:userId?' render ={() => <ProfileC />} />
        <Route path='/login' render ={() => <Login />} />
      </div>
      <Sidebar />
    </>
  )
}

export default App
