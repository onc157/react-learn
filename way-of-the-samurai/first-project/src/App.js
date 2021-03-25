import './App.scss'
import NavbarC from './components/Navbar/NavbarC';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Notifications from './components/Notifications/Notifications';
import Bookmarks from './components/Bookmarks/Bookmarks';
import UsersC from './components/Users/UsersC';
import ProfileC from './components/Profile/ProfileC';

const App = () => {
  return (
    <>
      <NavbarC />
      <div className='main-wrapper'>
        <Route path='/home' component ={Home} />
        <Route path='/explore' component ={Explore} />
        <Route path='/notifications' component ={Notifications} />
        <Route path='/messages' render ={() => <Messages />} />
        <Route path='/bookmarks' component ={Bookmarks} />
        <Route path='/users' component ={UsersC} />
        <Route path='/profile/:userId?' render ={() => <ProfileC />} />
      </div>
      <Sidebar />
    </>
  )
}

export default App
