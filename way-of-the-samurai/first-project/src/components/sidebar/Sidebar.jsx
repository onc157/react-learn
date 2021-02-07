import Search from '../search/Search';
import Recommendation from '../recommendation/Recommendation';
import HelpLinks from '../helpLinks/HelpLinks.jsx';

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
      <Search />
      <Recommendation />
      <HelpLinks />
    </div>
  )
}

export default Sidebar