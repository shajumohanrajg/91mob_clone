import { Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
//import { makeStyles } from '@mui/styles';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// const useStyles = makeStyles({
//   card: {
//     //maxWidth: 223,
//     maxWidth: '100%',
//     margin: '0 10px',
//     //margin: '0 auto',
//     border: 'solid 1px #dadada',
//     //minHeight: '284px',
//     borderRadius:'none',
   
//     //margin: '4px',
//     boxShadow: '0 0 3px #ccc',
//     '&:hover': {
//         borderColor: '#ff5a00',
//     }
   
 
//   },
//   button: {
//         marginTop: 10,
//         borderTop: 'solid 1px #c6c6c6',
//         height: '26px',
//         //bgcolor:  '#e7e7e7',
//         textAlign: 'center',
//         margin: '0 auto',
//         cursor: 'pointer',
//         color: '#545353',
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         borderLeft:  'none',
//         fontWeight: 400,
//         paddingTop: '7px',
//        fontSize: '16px',
//        transition: 'background-color 0.3s ease-in-out',
//        '&:hover': {
//          backgroundColor: '#ff5a00',
//          color:'#fff'
//        },
   
//   },
//   imageWrapper: {
//     // height: 169,
//     // width: 223,
//    // overflow: 'hidden',
//     overflow: 'hidden',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop:4,
//     height: 169,
//     width: '100%',
    
//   },
//   image: {
//     // width: '100%',
//     // height: '100',
//     //height: '100%',
//     height: '100%',
//     width: 'auto',
//     //width: 223,
//   },
// //   specScore: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     backgroundColor: '#000',
// //     color: '#fff',
// //     padding: '4px 8px',
// //     //borderRadius: 4,
// //   },
// // specScore: {
// //     position: 'absolute',
// //     //bottom: 0,
// //     left: 0,
// //     top: 0,
// //     //right: 0,
// //     padding: '4px 8px',
// //     backgroundColor: '#f2f2f2',
// //     color: '#000',
// //     textAlign: 'center',
// //     borderTop: '1px solid #ccc',
// //     fontWeight: 'bold',
// //     fontSize: '14px',
// //   },
// specScore:{
//     background: '#a9c53a none repeat scroll 0 0',
//     color: '#fff',
//     //float: 'left',
//     fontSize: '18px',
//     fontWeight: '500',
//     //left: 0,
//     //marginRight:  '10px',
//     //padding: '2px 3px 3px 4px',
//     //position: 'absolute',
//     //textAlign: 'left',
//     //top: 0,
//     //width: '36px',
//    //zIndex: 1,
//   },
//   specScoreText: {
//     fontSize: '14px',
//   },
// // specScore: {
// //     top: 0,
// //     left: 0,
// //     // textAlign: 'center',
// //     // padding: '8px',
// //     backgroundColor: '#f2f2f2',
// //     color: '#000',
// //   },
// });


  
const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </div>
    );
  };

const ProductSlider = () => {
  //const classes = useStyles();

  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

  };



  return (<>
   <Typography variant="h5" >Recomended and Recently Viewed</Typography>
   <br></br>
    <Box sx={{ border: 'solid 1px #dadada', p: 1 }}>
      
    <Slider {...settings} />
    <Grid container direction="row" spacing={0} >
      <Grid item xs={12} md={4} xl={4} sx={{ p: 0.5, border: '1px solid #ccc' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <img src="https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80" alt="Mobile" width={50} height={50} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">Xiaomi 13</Typography>
            <Typography variant="body1">Rs.47,000</Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Compare"
            />
          </Grid>
        </Grid>
      </Grid>
  
      <Grid item xs={12} md={4} xl={4} sx={{ p: 0.5, border: '1px solid #ccc' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <img src="https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80" alt="Mobile" width={50} height={50} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">Xiaomi 13</Typography>
            <Typography variant="body1">Rs.47,000</Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Compare"
            />
          </Grid>
        </Grid>
      </Grid>
  
      <Grid item xs={12} md={4} xl={4} sx={{ p: 0.5, border: '1px solid #ccc' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <img src="https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80" alt="Mobile" width={50} height={50} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">Xiaomi 13</Typography>
            <Typography variant="body1">Rs.47,000</Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Compare"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
  </Box>
  </>
  );
};

export default ProductSlider;
