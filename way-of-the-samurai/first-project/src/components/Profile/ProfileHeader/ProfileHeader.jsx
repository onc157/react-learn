import profileCover from '../../../assets/img/main_cover.png'

const ProfileHeader = () => {
  return (
    <div className='profile'>
      <div className='profile-cover'>
        <img src={profileCover} alt='profileCover' />
      </div>
      <div className='profile-wrapper'>
        <div className='profile-wrapper_title'>Northwest Agency</div>
        <div className='profile-wrapper_name'>@NorthwestAgency</div>
        <div className='profile-wrapper_description'>Design and development agency that promotes innovation through elevated websites, applications, and eCommerce solutions</div>
      </div>
    </div>
  )
}

export default ProfileHeader