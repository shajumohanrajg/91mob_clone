import { Box, Button, Divider, Grid, Link, List, ListItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';


import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Slider from '@mui/material/Slider';
import Detailsslider from './detailsslider';

function valuetext(value) {
    return `${value}°C`;
  }
  
const MyGrid = () => {

  const [sliderValue, setSliderValue] = React.useState([100, 65000]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleTextFieldChange = (event, field) => {
    const newValue = parseInt(event.target.value);

    if (isNaN(newValue)) {
      return;
    }

    const updatedValue = [...sliderValue];
    updatedValue[field] = newValue;

    setSliderValue(updatedValue);
  };

  const [activeStep, setActiveStep] = React.useState(0);


 const isMobileOrTablet = useMediaQuery('(max-width: 960px)');
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      label: 'Card 1',
      component: <Card1 />,
    },
    {
      label: 'Card 2',
      component: <Card2 />,
    },
    {
      label: 'Card 3',
      component: <Card3 />,
    },
  ];
  return (
   <Box sx={{border:'1px sold #ccc',mt:12}}>
    <Grid container spacing={2}  direction="row"
    justifyContent="center"
    alignItems="start"  >
   
     
        <Grid container spacing={2}>
       
      <Grid item xs={11} sm={11} md={9} xl={9} sx={{border:'1px solid #ccc'}}>
      <Typography variant='h6' sx={{color:'#454545',fontWeight:'bold'}}>Let's Find a Mobile For You!</Typography>
          <br></br>
        <Grid container spacing={4}>
        <Grid item xs={11} sm={11} md={6} xl={6}>
        
        <Box sx={{ maxWidth: "400" }}>
        <Typography variant='body2'sx={{color:'#454545',fontWeight:'bold'}}>By Price</Typography>
        <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        min={100}
        max={65000}
        valueLabelDisplay="auto"
        sx={{ color: '#eb5733' }}
      />
    </Box>
    <br></br>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
      size='small'
        label="Low Value in Rs"
        value={sliderValue[0]}
        onChange={(event) => handleTextFieldChange(event, 0)}
      />
      <Box sx={{ mx: 1 }}>to</Box>
      <TextField
      size='small'
        label="High Value in Rs"
        value={sliderValue[1]}
        onChange={(event) => handleTextFieldChange(event, 1)}
      />
      
    </Box>
    <br></br>
    <Button
        variant="contained"
        color="primary"
        fullWidth
        //onClick={handleButtonClick}
        sx={{textTransform:'capitalize',bgcolor:'#ff5a00'}}
      >
         Find Mobiles
      </Button>
      <br></br>
      <br></br>
      <Typography variant='body2'sx={{color:'#454545',fontWeight:'bold'}}>Price Around</Typography>
      <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>

<Link href="#" sx={{color:'#454545',fontSize:'12px'}}>
 Rs.5,000
</Link>
<Link href="#" sx={{color:'#454545',fontSize:'12px'}}>
 Rs.8,000
</Link>
<Link href="#" sx={{color:'#454545',fontSize:'12px'}}>
 Rs.10,000
</Link>
<Link href="#" sx={{color:'#454545',fontSize:'12px'}}>
 Rs.15,000
</Link>
{/* <Link href="#" sx={{color:'#454545',fontSize:'12px'}}>
 Rs.20,000
</Link> */}

</Stack>
    </Grid>
    <Grid item xs={11} sm={11} md={5} xl={5}>
    <Grid container spacing={1}>
      <Grid item xs={6} sm={6} md={5} xl={5} sx={{borderLeft:'1px solid lightgray'}}>
      <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='body2' sx={{color:'#333333',fontWeight:'bold'}}>By Brand</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption' sx={{color:'#333333'}}>Samsung</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption'  sx={{color:'#333333'}}>Oneplus</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption'  sx={{color:'#333333'}}>Xiaomi</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption'  sx={{color:'#333333'}}>Vivo</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption'  sx={{color:'#333333'}}>Oppo</Typography>
            
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={6} sm={6} md={5} xl={5} sx={{borderLeft:'1px solid lightgray',marginLeft:1}}>
      <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='body2' sx={{color:'#333333',fontWeight:'bold'}}>By Features</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption' sx={{color:'#333333'}}>5G Connectivity</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption'  sx={{color:'#333333'}}>8GB Ram</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption'  sx={{color:'#333333'}}>5000 Mah+ Battery</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption'  sx={{color:'#333333'}}>64mp Camera</Typography>
            
          </ListItem>
        </List>
        <Divider />
        <List sx={{ padding: 1, margin: 0 }}>
          <ListItem sx={{ padding: 0, margin: 0 }}>
            {/* Content for the left item */}
            <Typography  variant='caption'  sx={{color:'#333333'}}>Android 12.0</Typography>
            
          </ListItem>
        </List>
      </Grid>
    </Grid>
    </Grid>
        
        </Grid>
      </Grid>
      <Grid item xs={11} sm={11} md={3} xl={3}>
  <Detailsslider />
     
      
      
     
      </Grid>
    </Grid>
   
    
      
 
  
    </Grid>
    </Box>
  );
};

const Card1 = () => {
  return (
    <>
    <Card sx={{ display: 'flex', margin: '9px 9px', borderRadius: '5px', padding: '7px',border:'1px solid #ebebeb',boxShadow:'none' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-76,q-100,c-at_max,dpr-2"
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '11px', color: "#9d9d9d", fontWeight: 'medium' }}>
              39 Minutes Ago
            </Typography>
            <Typography variant="substite2" color="text.secondary" sx={{ fontSize: '15px', color: "#363535", fontWeight: 'medium' }}>
              iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
    
  </Card>
  <Card sx={{ display: 'flex', border:'1px solid #ebebeb', margin: '9px 9px', borderRadius: '5px', padding: '7px',boxShadow:'none' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-76,q-100,c-at_max,dpr-2"
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '11px', color: "#9d9d9d", fontWeight: 'medium' }}>
              39 Minutes Ago
            </Typography>
            <Typography variant="substite2" color="text.secondary" sx={{ fontSize: '15px', color: "#363535", fontWeight: 'medium' }}>
              iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
    
  </Card>
  <Card sx={{ display: 'flex', border:'1px solid #ebebeb', margin: '9px 9px', borderRadius: '5px', padding: '7px',boxShadow:'none' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-76,q-100,c-at_max,dpr-2"
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '11px', color: "#9d9d9d", fontWeight: 'medium' }}>
              39 Minutes Ago
            </Typography>
            <Typography variant="substite2" color="text.secondary" sx={{ fontSize: '15px', color: "#363535", fontWeight: 'medium' }}>
              iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
    
  </Card>
  </>
  );
};

const Card2 = () => {
  return (
    <>
    <Card sx={{ display: 'flex', margin: '9px 9px', borderRadius: '5px', padding: '7px',border:'1px solid #ebebeb',boxShadow:'none' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-76,q-100,c-at_max,dpr-2"
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '11px', color: "#9d9d9d", fontWeight: 'medium' }}>
              39 Minutes Ago
            </Typography>
            <Typography variant="substite2" color="text.secondary" sx={{ fontSize: '15px', color: "#363535", fontWeight: 'medium' }}>
              iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
    
  </Card>
  <Card sx={{ display: 'flex', border:'1px solid #ebebeb', margin: '9px 9px', borderRadius: '5px', padding: '7px',boxShadow:'none' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-76,q-100,c-at_max,dpr-2"
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '11px', color: "#9d9d9d", fontWeight: 'medium' }}>
              39 Minutes Ago
            </Typography>
            <Typography variant="substite2" color="text.secondary" sx={{ fontSize: '15px', color: "#363535", fontWeight: 'medium' }}>
              iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
    
  </Card>
  <Card sx={{ display: 'flex', border:'1px solid #ebebeb', margin: '9px 9px', borderRadius: '5px', padding: '7px',boxShadow:'none' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-76,q-100,c-at_max,dpr-2"
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '11px', color: "#9d9d9d", fontWeight: 'medium' }}>
              39 Minutes Ago
            </Typography>
            <Typography variant="substite2" color="text.secondary" sx={{ fontSize: '15px', color: "#363535", fontWeight: 'medium' }}>
              iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
    
  </Card>
  </>
  );
};

const Card3 = () => {
  return (
    <>
    <Card sx={{ display: 'flex', margin: '9px 9px', borderRadius: '5px', padding: '7px',border:'1px solid #ebebeb',boxShadow:'none' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-76,q-100,c-at_max,dpr-2"
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '11px', color: "#9d9d9d", fontWeight: 'medium' }}>
              39 Minutes Ago
            </Typography>
            <Typography variant="substite2" color="text.secondary" sx={{ fontSize: '15px', color: "#363535", fontWeight: 'medium' }}>
              iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
    
  </Card>
  <Card sx={{ display: 'flex', border:'1px solid #ebebeb', margin: '9px 9px', borderRadius: '5px', padding: '7px',boxShadow:'none' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-76,q-100,c-at_max,dpr-2"
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '11px', color: "#9d9d9d", fontWeight: 'medium' }}>
              39 Minutes Ago
            </Typography>
            <Typography variant="substite2" color="text.secondary" sx={{ fontSize: '15px', color: "#363535", fontWeight: 'medium' }}>
              iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
    
  </Card>
  <Card sx={{ display: 'flex', border:'1px solid #ebebeb', margin: '9px 9px', borderRadius: '5px', padding: '7px',boxShadow:'none' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-76,q-100,c-at_max,dpr-2"
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '11px', color: "#9d9d9d", fontWeight: 'medium' }}>
              39 Minutes Ago
            </Typography>
            <Typography variant="substite2" color="text.secondary" sx={{ fontSize: '15px', color: "#363535", fontWeight: 'medium' }}>
              iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
    
  </Card>
  </>
  );
};

export default MyGrid;
