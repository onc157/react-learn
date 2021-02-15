import User from './User/User'
import Message from './Message/Message'
import AddMessage from './AddMessage/AddMessage'
import './style.scss'

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
      <AddMessage
        dispatch={props.dispatch}
        newMessageContent={props.state.newMessageContent}
      />
    </>
  )
}

export default Messages