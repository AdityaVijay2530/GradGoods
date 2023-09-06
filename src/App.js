
import './App.css';
import Nav from './components/Nav';
import SmallNav from './components/SmallNav';
import Slidders from './components/Slidders';
import Recommendations from './components/Recommendations';
import HotDeals from './components/HotDeals';
import Registration from './components/Registration';
import Products from './components/Products';
import AllProductButton from './components/AllProductButton';
import FindRoom from './components/FindRoom';
import Posters from './components/Posters';

function App() {
  return (
    <>   
     <Nav/>
     <SmallNav/>
     <Slidders/>
     <Recommendations/>
     <HotDeals/>
     <Registration/>
     <Products/>
     <AllProductButton/>
     <FindRoom/>
     <Posters/>
    </>
  );
}

export default App;
