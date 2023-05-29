import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MobileStepper, Paper } from '@mui/material';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const MyGrid = () => {

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
   
    <Grid container spacing={2}  direction="row"
    justifyContent="center"
    alignItems="start" >
      <Grid item xs={11} sm={11} md={6} xl={6}>
      <Card sx={{border:'1px solid #ebebeb',boxShadow:'none'}}>
      <CardMedia
        sx={{ height: 325 }}
        image="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/oppo-reno-10-series-leak.jpg?tr=w-245,q-100,c-at_max,dpr-2"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div" sx={{fontSize:'11px',color:"#9d9d9d",fontWeight:'medium'}}>
         39 Minutes Ago
        </Typography>
        <Typography variant="substite2" color="text.secondary" sx={{fontSize:'15px',color:"#363535",fontWeight:'medium'}}>
        iPhone 16 Pro Max to feature larger display than iPhone 15 Pro Max, reveal early CAD renders
        </Typography>
      </CardContent>
     
    </Card>
      </Grid>
    
      <Grid item xs={11} sm={11} md={6} xl={6}>
  
      <Paper sx={{padding:'5px',border:'1px solid #ebebeb',boxShadow:'none'}}>
      {steps[activeStep].component}
        
      </Paper>
      
      
      {!isMobileOrTablet && (
      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
           <ChevronRightIcon />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        
         <ChevronLeftIcon />
          </Button>
        }
      /> )}
      </Grid>
 
  
    </Grid>
    
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
