//import logo from './logo.svg';
import { Box } from '@mui/material';
import Hidden from '@mui/material/Hidden';
import './App.css';
import Brandslider from './brandslider';
import Cardslider from './cardslider';
import Categories from './categories';
import Deepdrives from './deepdrive';
import Finddetails from './finddetails';
import Latestslider from './latestslider';
import Priceslider from './priceslider';
import Slider from './slider1';
import Storiesslider from './storiesslider';

function Homepage() {
  return (
  <>
  <Box sx={{mt:14}}>
  <Hidden mdDown>
    <Finddetails />
    </Hidden>
      <h2>Top Categories</h2>
      <Categories />
      <br></br>
      {/* <Deepdrives /> */}
      <h2>Upcoming Mobiles</h2>
      <Slider />
      <br></br>
      
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
     
      <br></br>
      <h2>Stories That Matter</h2>
      <Storiesslider />
      <br></br>
      <h2>Best Phones By Price</h2>
      <Priceslider />
      </Box>
      </>
  );
}

export default Homepage;
