import User from './User/User'
import Message from './Message/Message'
import './style.scss'
import AddMessageContainer from './AddMessage/AddMessageContainer';

const Messages = (props) => {
  const state = props.store.getState()
  const usersElements = state.messagesPage.usersData
    .map((user, i) => <User name={user.name} id={user.id}/>)
  const messagesElements = state.messagesPage.messagesData
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
      <AddMessageContainer
        store={props.store}
      />
    </>
  )
}

export default Messages