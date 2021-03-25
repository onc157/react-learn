import profileCover from '../../../assets/img/main_cover.png'

import Preloader from '../../common/Loader/Preloader';
import { Avatar } from '@material-ui/core';
import { Facebook, GitHub, Instagram, Twitter, YouTube } from '@material-ui/icons';
import userPhoto from '../../../assets/img/avatar.png';

const ProfileInfo = (props) => { //
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
          <Avatar
            alt='post-user_avatar'
            src={props.profile.photos.small ? props.profile.photos.small : userPhoto }
          />
        </div>
        <div className='profile-about'>
          <div className='profile-about_name'>{props.profile.fullName}</div>
          <div className='profile-about_account'>{props.profile.contacts.instagram}</div>
          <div className='profile-about_description'>{props.profile.aboutMe}</div>
        </div>
        <div className='profile-contacts'>
          <a href={`https://${props.profile.contacts.facebook}`} target="_blank"><Facebook className='profile-contacts__logo'/></a>
          <a href={`https://${props.profile.contacts.instagram}`} target="_blank"><Instagram className='profile-contacts__logo'/></a>
          <a href={`https://${props.profile.contacts.twitter}`} target="_blank"><Twitter className='profile-contacts__logo'/></a>
          <a href={`https://${props.profile.contacts.youtube}`} target="_blank"><YouTube className='profile-contacts__logo'/></a>
          <a href={`https://${props.profile.contacts.github}`} target="_blank"><GitHub className='profile-contacts__logo'/></a>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo