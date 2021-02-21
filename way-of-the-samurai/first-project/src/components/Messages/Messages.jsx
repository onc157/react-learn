import User from './User/User'
import Message from './Message/Message'
import './style.scss'
import AddMessageContainer from './AddMessage/AddMessageContainer';
import { connect } from 'react-redux';

const Messages = (props) => {
  const usersElements = props.usersData
    .map((user, i) => <User name={user.name} key={i} id={user.id}/>)
  const messagesElements = props.messagesData
    .map((elem, i) => <Message message={elem.message} key={i} id={elem.id}/>)

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
      <AddMessageContainer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    usersData: state.messagesPage.usersData,
    messagesData: state.messagesPage.messagesData,
  }
}

const MessagesW = connect(mapStateToProps)(Messages)

export default MessagesW