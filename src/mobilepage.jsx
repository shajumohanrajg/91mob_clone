import { Box } from '@mui/material';
import Browsefilter from './browsefilter';
import Comparemobiles from './comparemobiles';
import Descriptionbox from './descriptionbox';
import Mobilegrid from './mobiledatagrid';
import Recentslider from './recentslider';

function Mobilepage() {
  return (
    <>
 <Box sx={{mt:10}}> 
     <Descriptionbox />
     <br></br>
      <Browsefilter />
      <br></br>
      <Recentslider />
      <br></br>
      <Mobilegrid />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Comparemobiles />
      </Box>
    </>
  );
}

export default Mobilepage;