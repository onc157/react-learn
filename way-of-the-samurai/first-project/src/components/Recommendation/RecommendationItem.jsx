import logoHelp from '../../assets/img/logo_help.svg'

const RecommendationItem = () => {
  return (
    <div className='recommendation-item'>
      <div className='item-logo'>
        <img src={logoHelp} alt='logo' />
      </div>
      <div className='item-wrapper'>
        <div className='item-wrapper_title'>InVision</div>
        <div className='item-wrapper_name'>@InVisionApp</div>
      </div>
    </div>
  )
}

export default RecommendationItem