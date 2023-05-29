import { Box, Divider, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
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
    border: 'solid 1px #dadada',
    //minHeight: '284px',
    borderRadius:'none',
   
    //margin: '4px',
    boxShadow: '0 0 3px #ccc',
    '&:hover': {
        borderColor: '#ff5a00',
    }
   
 
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
    height: 169,
    width: '100%',
    
  },
  image: {
    // width: '100%',
    // height: '100',
    //height: '100%',
    height: '100%',
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
    background: '#a9c53a none repeat scroll 0 0',
    color: '#fff',
    //float: 'left',
    fontSize: '18px',
    fontWeight: '500',
    //left: 0,
    //marginRight:  '10px',
    //padding: '2px 3px 3px 4px',
    //position: 'absolute',
    //textAlign: 'left',
    //top: 0,
    //width: '36px',
   //zIndex: 1,
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
      name: 'Vivo T2x',
      price: '$19.99',
      specScore: '85%',
      imageSrc: 'https://www.91-img.com/pictures/151039-v4-vivo-t2x-mobile-phone-small-1.jpg?tr=h-60,w-45,q-80,c-at_max',
      divider: <Divider />
    },
    {
        id: 2,
        name: 'Samsung Galaxy S23',
        price: '$19.99',
        specScore: '85%',
        imageSrc: 'https://www.91-img.com/pictures/149249-v4-samsung-galaxy-f23-5g-mobile-phone-small-1.jpg?tr=h-60,w-45,q-80,c-at_max',
        divider: <Divider />
      },
      {
        id: 3,
        name: 'Samsung Galaxy S14',
        price: '$19.99',
        specScore: '85%',
        imageSrc: 'https://www.91-img.com/pictures/155272-v3-samsung-galaxy-f14-5g-mobile-phone-small-1.jpg?tr=h-60,w-45,q-80,c-at_max',
      },
      
    // Add more product objects here
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



  return (
    <Box sx={{border: 'solid 1px #dadada',p:0.5,}}>
    <Slider {...settings}>
      <List><Typography variant="body2" sx={{color:'#404040 ! important',fontSize:'14px !important',fontWeight:'bold'}}>
      Best 5G Phones under 15000
      </Typography><br></br>
      {products.map((product) => (
        <>
        <ListItem key={product.id}>
          <ListItemAvatar >
            <img alt={product.name} src={product.imageSrc} variant="square"/>
          </ListItemAvatar>
          <ListItemText >
          <Typography gutterBottom variant="h6" component="div" a sx={{color:'#404040',fontSize:'15px !important',fontWeight:'normal'}}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{color:'#404040 ! important',fontSize:'17px !important',fontWeight:'normal'}}>
                  {product.price}
                </Typography>
            </ListItemText>
          <ListItemSecondaryAction>
            <ListItemText>
            <Typography variant="body2" className={classes.specScore} sx={{fontSize:'10px !important',fontWeight:'bold'}}>
                <Typography className={classes.specScoreText} sx={{fontWeight:'bold'}} >{product.specScore}</Typography>
                 SPEC  <br></br>SCORE
                </Typography>
                </ListItemText>
          </ListItemSecondaryAction>
        </ListItem>
        {product.divider}
       </>
      ))}
    </List>
    <List><Typography variant="body2" sx={{color:'#404040 ! important',fontSize:'14px !important',fontWeight:'bold'}}>
          Best 5G Phones under 15000
          </Typography><br></br>
      {products.map((product) => (
          <>
        <ListItem key={product.id}>
          <ListItemAvatar >
            <img alt={product.name} src={product.imageSrc} variant="square"/>
          </ListItemAvatar>
          <ListItemText >
          <Typography gutterBottom variant="h6" component="div" a sx={{color:'#404040',fontSize:'15px !important',fontWeight:'normal'}}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{color:'#404040 ! important',fontSize:'17px !important',fontWeight:'normal'}}>
                  {product.price}
                </Typography>
            </ListItemText>
          <ListItemSecondaryAction>
            <ListItemText>
            <Typography variant="body2" className={classes.specScore} sx={{fontSize:'10px !important',fontWeight:'bold'}}>
                <Typography className={classes.specScoreText} sx={{fontWeight:'bold'}} >{product.specScore}</Typography>
                 SPEC  <br></br>SCORE
                </Typography>
                </ListItemText>
          </ListItemSecondaryAction>
        </ListItem>
         {product.divider}</>
      ))}
    </List>
    <List><Typography variant="body2" sx={{color:'#404040 ! important',fontSize:'14px !important',fontWeight:'bold'}}>
      Best 5G Phones under 15000
      </Typography><br></br>
      {products.map((product) => (
        <>
        <ListItem key={product.id}>
          <ListItemAvatar >
            <img alt={product.name} src={product.imageSrc} variant="square"/>
          </ListItemAvatar>
          <ListItemText >
          <Typography gutterBottom variant="h6" component="div" a sx={{color:'#404040',fontSize:'15px !important',fontWeight:'normal'}}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{color:'#404040 ! important',fontSize:'17px !important',fontWeight:'normal'}}>
                  {product.price}
                </Typography>
            </ListItemText>
          <ListItemSecondaryAction>
            <ListItemText>
            <Typography variant="body2" className={classes.specScore} sx={{fontSize:'10px !important',fontWeight:'bold'}}>
                <Typography className={classes.specScoreText} sx={{fontWeight:'bold'}} >{product.specScore}</Typography>
                 SPEC  <br></br>SCORE
                </Typography>
                </ListItemText>
          </ListItemSecondaryAction>
        </ListItem>
         {product.divider}</>
      ))}
    </List>
       
    </Slider>
    </Box>
  );
};

export default ProductSlider;
