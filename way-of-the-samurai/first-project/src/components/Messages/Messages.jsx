import './style.scss'
import User from './User/User';
import Message from './Message/Message';

const Messages = (props) => {
  const usersElements = props.state.usersData
    .map((user, i) => <User name={user.name} id={user.id}/>)
  const messagesElements = props.state.messagesData
    .map((elem, i) => <Message message={elem.message} id={elem.id}/>)

  return (
    <>
      <div className='messages'>
        <div className='users-list'>
          {usersElements}
        </div>
        <div className='messages-list'>
          {messagesElements}
        </div>
      </div>
    </>
  )
}

export default Messages