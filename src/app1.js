//import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import ToolbarComponent from './toolbar';
import Categories from './categories';
import Deepdrives from './deepdrive';
import Carosal from './caro';
import { Container } from '@mui/material';
import ProductCarousel from './caro1';
import Slider from './slider1';
import Cardslider from './cardslider';
import Storiesslider from './storiesslider';
import Brandslider from './brandslider';
import Priceslider from './priceslider';
import Latestslider from './latestslider';
import Finddetails from './finddetails';
import Descriptionbox from './descriptionbox';
import Browsefilter from './browsefilter';
import Mobilelist from './mobilelist';
import Recentslider from './recentslider';
import Mobilegrid from './mobiledatagrid';
import Comparemobiles from './comparemobiles';
import Mobile from './mobile';

function App() {
  return (
    <Container disableGutters  sx={{padding:"none",margin:'none',maxWidth:"xl"}} >
      <NavBar />
      <ToolbarComponent />
      <br></br>
     
      <br></br>
      <Browsefilter />
      <Recentslider />
      <Mobilegrid />
      <br></br>
      {/* <Mobilelist /> */}
      <br></br>
      <Descriptionbox />

      <Comparemobiles />
      <Mobile />
      <br></br>
      {/* <Finddetails /> */}
      <br></br>
      <h2>Top Categories</h2>
      <Categories />
      <br></br>
      {/* <Deepdrives /> */}
      <h2>Upcoming Mobiles</h2>
      <Slider />
      <br></br>
      {/* <Categories /> */}
      {/* <Deepdrives /> */}
      <h2>Latest and Popular Mobiles</h2>
      <Latestslider />
      <br></br>
      <h2>Latest News</h2>
      <Cardslider />
      <br></br>
      <h2>Deep Drive</h2>
      <Deepdrives />
      <br></br>
      <h2>Featured Mobile Brands</h2>
      <Brandslider />
      {/* <ProductCarousel products={products} /> */}
      {/* <Carosal /> */}
      <br></br>
      <h2>Stories That Matter</h2>
      <Storiesslider />
      <br></br>
      <h2>Best Phones By Price</h2>
      <Priceslider />
  
   </Container>
  );
}

export default App;
