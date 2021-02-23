import profileCover from '../../../assets/img/main_cover.png'

import Preloader from '../../common/Loader/Preloader';
import { Avatar } from '@material-ui/core';

const ProfileHeader = (props) => { // TODO: RENAME CLASSES
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className='profile'>
      <div className='profile-cover'>
        <img src={profileCover} alt='profileCover' />
      </div>
      <div className='profile-wrapper'>
        <div className='profile-logo'>
          <Avatar alt='post-user_avatar' src={props.profile.photos.small} />
        </div>
        <div className='profile-about'>
          <div className='profile-about_name'>{props.profile.fullName}</div>
          <div className='profile-about_account'>{props.profile.contacts.instagram}</div>
          <div className='profile-about_description'>{props.profile.aboutMe}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader