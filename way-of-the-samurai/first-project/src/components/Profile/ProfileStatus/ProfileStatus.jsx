import { useState } from 'react';

const ProfileStatus = (props) => {
  const [isEditMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!isEditMode)
  }

  return (
    <div className='status'>
      { isEditMode
        ? <input value={props.status} className='status__input' onBlur={toggleEditMode} autoFocus={true}/>
        : <div className='status__value' onClick={toggleEditMode} >{props.status}</div>}
    </div>
  )
}

export default ProfileStatus