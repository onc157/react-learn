import { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
  const [isEditMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  // useEffect(() => {
  //   console.log('chpok');
  //     setStatus('asd')
  // }, [])

  const activateEditMode = () => {
    setEditMode(true)
    if (props.status !== status) {
      setStatus(props.status)
    }
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className='status'>
      {console.log(status)}
      { isEditMode
        ? <input value={status} className='status__input' onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}/>
        : <div className='status__value' onClick={activateEditMode} >{props.status || 'no status'}</div>}
    </div>
  )
}

export default ProfileStatus