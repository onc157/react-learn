import Search from '../Search/Search';
import Recommendation from '../Recommendation/Recommendation';
import HelpLinks from '../HelpLinks/HelpLinks.jsx';

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