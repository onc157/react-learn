import Style from './style';

const Recommendation = () => {
  return (
    <div className='recommendation'>
      <div className='recommendation-title'>You might like</div>
      <Style />
      <Style />
      <Style />
      <div className='recommendation-more'>
        <a href='#'>Show more</a>
      </div>
    </div>
  )
}

export default Recommendation