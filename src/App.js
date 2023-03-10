// import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
//import VertNavbar from './Components/Vertical_navbar';
import AltVertNavbar from './Components/AltVertNavbar';
import NightMode from './Components/nightMode'
// import ImageSlides from './Components/Image_slides';

//end section for site
//socials
import Socials from './Components/Socials';
import Trademark from './Components/Trademark';
//info

function App() {
  return (
  <>
  <Navbar title="VALORANT" link="Link"  dropdownList="Information" aboutUs="About Us" />
  <Carousel/>
  {/* <ImageSlides/> */}
  
  <AltVertNavbar/>

  <NightMode/>
  <Socials/>
  <Trademark/>
  </>
  );
}

export default App;
