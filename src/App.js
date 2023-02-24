import './App.css';
import Navbar from './Components/Navbar';
//import VertNavbar from './Components/Vertical_navbar';
import AltVertNavbar from './Components/AltVertNavbar';
import NightMode from './Components/nightMode'
import ImageSlides from './Components/Image_slides';

function App() {
  return (
  <>
  <Navbar title="VALORANT" link="Link"  dropdownList="Information" aboutUs="About Us" />
  <ImageSlides/>
  
  <AltVertNavbar/>

  <NightMode/>
  </>
  );
}

export default App;
