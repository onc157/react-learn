import { NavLink } from 'react-router-dom';

const User = (props) => {
  const path = `/messages/${props.id}`
  return (
    <div className='user'>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default User