import RecommendationItem from './RecommendationItem';

const Recommendation = () => {
  return (
    <div className='recommendation'>
      <div className='recommendation-title'>You might like</div>
      <RecommendationItem />
      <RecommendationItem />
      <RecommendationItem />
      <div className='recommendation-more'>
        <a href='#'>Show more</a>
      </div>
    </div>
  )
}

export default Recommendation