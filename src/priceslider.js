import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

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

const products = [
  {
    id: 1,
    image: 'https://www.91-img.com/images/under_5000_1.jpg?tr=h-116,w-225,q-80,c-at_max',
    title: 'Best phones Under Rs. 5,000',
    price: '$19.99',
    specScore: '85%', 
  },
  {
    id: 2,
    image: 'https://www.91-img.com/images/under_8000.jpg?tr=h-116,w-225,q-80,c-at_max',
    title: 'Best phones Under Rs. 8,000',
    price: '$29.99',
    specScore: '85%', 
  },
  {
    id: 3,
    image: 'https://www.91-img.com/images/under_10000.jpg?tr=h-116,w-225,q-80,c-at_max',
    title: 'Best phones Under Rs. 10,000',
    price: '$19.99',
    specScore: '85%', 
  },
  {
    id: 4,
    image: 'https://www.91-img.com/images/under_12000.jpg?tr=h-116,w-225,q-80,c-at_max',
    title: 'Best phones Under Rs. 12,000',
    price: '$29.99',
    specScore: '85%', 
  },
  {
    id: 5,
    image: 'https://www.91-img.com/images/under_5000_1.jpg?tr=h-116,w-225,q-80,c-at_max',
    title: 'Best phones Under Rs. 5,000',
    price: '$19.99',
    specScore: '85%', 
  },
  {
    id: 6,
    image: 'https://www.91-img.com/images/under_8000.jpg?tr=h-116,w-225,q-80,c-at_max',
    title: 'Best phones Under Rs. 5,000',
    price: '$29.99',
    specScore: '85%', 
  },
  {
    id: 7,
    image: 'https://www.91-img.com/images/under_10000.jpg?tr=h-116,w-225,q-80,c-at_max',
    title: 'Best phones Under Rs. 5,000',
    price: '$19.99',
    specScore: '85%', 
  },
  {
    id: 8,
    image: 'https://www.91-img.com/images/under_12000.jpg?tr=h-116,w-225,q-80,c-at_max',
    title: 'Best phones Under Rs. 5,000',
    price: '$29.99',
    specScore: '85%', 
  },
  // Add more products as needed
];
  
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
  const classes = useStyles();

  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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



  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id}>
          <Card className={classes.card} sx={{border:'none'}}>
          <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image={product.image}
          alt="Live from space album cover"
        /><Typography gutterBottom variant="h6" component="div" align="center" sx={{color:'#404040',fontSize:'14px !important',fontWeight:'bold'}}>
        {product.title}
      </Typography>
      
            <CardActionArea>
              {/* <div className={classes.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={classes.image}
                />
              </div> */}
              {/* <CardContent>
                <Typography gutterBottom variant="h6" component="div" align="center" sx={{color:'#404040',fontSize:'15px !important',fontWeight:'bold'}}>
                  {product.title}
                </Typography>
                
              </CardContent> */}
                {/* <CardContent>
                <Typography gutterBottom variant="h6" component="div" align="center" sx={{color:'#404040',fontSize:'15px !important',fontWeight:'bold'}}>
                  {product.title}
                </Typography>
                
              </CardContent> */}
            </CardActionArea>
            
          </Card>
        </div>
      ))}
    </Slider>

  );
};

export default ProductSlider;
