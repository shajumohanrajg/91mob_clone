import { Box, CardActionArea, CardContent,  Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import iconsImage from './assets/img1.png';
import iconsImage10 from './assets/img10.png';
import iconsImage2 from './assets/img2.png';
import iconsImage3 from './assets/img3.png';
import iconsImage4 from './assets/img4.png';
import iconsImage5 from './assets/img5.png';
import iconsImage6 from './assets/img6.png';
import iconsImage7 from './assets/img7.png';
import iconsImage8 from './assets/img8.png';
import iconsImage9 from './assets/img9.png';

//import { experimentalStyled as styled } from "@mui/material/styles";
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
//import { makeStyles } from '@mui/styles';
//import { Icon } from '@mui/icons-material';

const useStyles = makeStyles({
  card: {
    //maxWidth: 223,
    maxWidth: '100%',
    margin: '0 10px',
    //margin: '0 auto',
    // border: 'solid 1px #dadada',
    //minHeight: '284px',
   border:'none',
   boxShadow:'none',
    //margin: '4px',
    // boxShadow: '0 0 3px #ccc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    // transition: 'border-color 0.3s ease-in-out',
    // '&:hover': {
    //   borderColor: '#ff5a00',
    
    // },
  },
  button: {
        marginTop: 10,
        borderTop: 'solid 1px #c6c6c6',
        height: '26px',
        //bgcolor:  '#e7e7e7',
        textAlign: 'center',
        margin: '0 auto',
        cursor: 'pointer',
        color: '#545353',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderLeft:  'none',
        fontWeight: 400,
        paddingTop: '7px',
       fontSize: '16px',
       transition: 'background-color 0.3s ease-in-out',
       '&:hover': {
         backgroundColor: '#ff5a00',
         color:'#fff'
       },
   
  },
  imageWrapper: {
    // height: 169,
    // width: 223,
   // overflow: 'hidden',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:4,
    //height: 169,
    width: '100%',
    
  },
  image: {
    // width: '100%',
    // height: '100',
    //height: '100%',
    //height: '100%',
    height: '50px',
    width: 'auto',
    //width: 223,
  },
//   specScore: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     backgroundColor: '#000',
//     color: '#fff',
//     padding: '4px 8px',
//     //borderRadius: 4,
//   },
// specScore: {
//     position: 'absolute',
//     //bottom: 0,
//     left: 0,
//     top: 0,
//     //right: 0,
//     padding: '4px 8px',
//     backgroundColor: '#f2f2f2',
//     color: '#000',
//     textAlign: 'center',
//     borderTop: '1px solid #ccc',
//     fontWeight: 'bold',
//     fontSize: '14px',
//   },
  specScore:{
    background: '#3d5804 none repeat scroll 0 0',
    color: '#fff',
    float: 'left',
    fontSize: '18px',
    fontWeight: '500',
    left: 0,
    marginRight:  '10px',
    padding: '2px 3px 3px 4px',
    position: 'absolute',
    textAlign: 'left',
    top: 0,
    width: '36px',
   zIndex: 1,
  },
  specScoreText: {
    fontSize: '14px',
  },
// specScore: {
//     top: 0,
//     left: 0,
//     // textAlign: 'center',
//     // padding: '8px',
//     backgroundColor: '#f2f2f2',
//     color: '#000',
//   },
});
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));
  
  
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   card: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   media: {
//     width: 100,
//     height: 100,
//     marginRight: theme.spacing(2),
//   },

  
// }));

const MyComponent = () => {

  
const products = [
  {
    id: 1,
    image: iconsImage,
    title: 'Mobiles',
  },
  {
    id: 2,
    image: iconsImage2,
    title: 'Laptops',
  },
  {
    id: 3,
    image: iconsImage3,
    title: 'Tablets',
  },
  {
    id: 4,
    image: iconsImage4,
    title: 'Headphones',
  },
  {
    id: 5,
    image: iconsImage5,
    title: 'Smartwatches',
  },
  {
    id: 6,
    image: iconsImage6,
    title: 'Televisions',
  },
  {
    id: 7,
    image: iconsImage7,
    title: 'Airconditioners',
  },
  {
    id: 8,
    image: iconsImage8,
    title: 'Refridgerators',
  },
  {
    id: 9,
    image: iconsImage9,
    title: 'wasingmachines ',
  },
  {
    id: 10,
    image: iconsImage10,
    title: 'Cameras',
  },
  

]
  const classes = useStyles();

  return (
    <>
 
   <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        //direction='row'
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {products.map((product) => (
          <Grid  {...{ xs: 4, sm: 4, md: 2, lg: 1.2 }}  key={product.id} >
                <CardActionArea>
              <div className={classes.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={classes.image}
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" align="center" sx={{color:'#404040',fontSize:'12px !important',fontWeight:'medium'}}>
                  {product.title}
                </Typography>
              
               
              </CardContent>
            </CardActionArea>
          
          </Grid> ))}
         
        
      
      </Grid>
    </Box>
 
 </>
  );
};


export default MyComponent;
