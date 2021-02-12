import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Notifications from './components/Notifications/Notifications';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Lists from './components/Lists/Lists';

const App = (props) => {

  return (
    <>
      <Navbar />
      <div className='main-wrapper'>
        <Route path='/home' component ={Home} />
        <Route path='/explore' component ={Explore} />
        <Route path='/notifications' component ={Notifications} />
        <Route path='/messages' render ={() =>
          <Messages state={props.state.messagesPage} />
        } />
        <Route path='/bookmarks' component ={Bookmarks} />
        <Route path='/lists' component ={Lists} />
        <Route path='/profile' render ={
          () => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostContent={props.updateNewPostContent}
          />
        } />
      </div>
      <Sidebar />
    </>
  )
}

export default App
