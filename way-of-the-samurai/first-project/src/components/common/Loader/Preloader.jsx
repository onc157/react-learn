import loader from '../../../assets/img/loader.svg';

const Preloader = (props) => {
  return (
      <div className={'loader-wrapper'} >
        <img className={'loader'} src={loader} alt={'loader'}/>
      </div>
  )
}

export default Preloader