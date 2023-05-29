import { Card, CardMedia, Grid, Paper } from '@mui/material';
import React from 'react';

import { experimentalStyled as styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
//import { Icon } from '@mui/icons-material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  

  
}));

const MyComponent = () => {

  const products = [
    {
      id: 1,
      image: 'https://www.91-cdn.com/images/deepdive-game-zone.png?tr=w-224,q-100,c-at_max,dpr-2',
      
    },
    {
      id: 2,
      image: 'https://www.91-cdn.com/images/deepdive-deals.png?tr=w-224,q-100,c-at_max,dpr-2',
     
    },
    {
      id: 3,
      image: 'https://www.91-cdn.com/images/deepdive-amd-comparisions-2.png?tr=w-224,q-100,c-at_max,dpr-2',
      
    },
    {
      id: 4,
      image: 'https://www.91-cdn.com/images/deepdive-personal-computing.png?tr=w-224,q-100,c-at_max,dpr-2',
     
    },
  ]
  const classes = useStyles();

  return (
    <>
{/* <Typography variant='h6'>Deep Drive</Typography> */}
  <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center">
       {products.map((product) => (
   <Grid  xs={6} md={3} key={product.id} sx={{p:1}}>
   <Card className={classes.card} sx={{border:'none'}}>
          <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image={product.image}
          alt="Live from space album cover"
        />
        </Card>
   {/* <img src={deelsdrive1} alt='' height='200px'></img> */}
   </Grid>))}
   
 </Grid>
 </>
  );
};



export default MyComponent;
