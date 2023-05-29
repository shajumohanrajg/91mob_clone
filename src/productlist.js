import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';


const useStyles = makeStyles({
    card: {
      //maxWidth: 223,
      maxWidth: '100%',
      margin: '0 10px',
      //margin: '0 auto',
      border: 'solid 1px #dadada',
      //minHeight: '284px',
     
      //margin: '4px',
      boxShadow: '0 0 3px #ccc',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'border-color 0.3s ease-in-out',
      '&:hover': {
        borderColor: '#ff5a00',
        '& $button': {
          backgroundColor: '#ff5a00',
          color:'#fff'
        },
      },
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
const ProductList = () => {
    const classes = useStyles();
  const products = [
    {
      id: 1,
      name: 'Vivo T2x',
      price: '$19.99',
      specScore: '85%',
      imageSrc: 'https://www.91-img.com/pictures/151039-v4-vivo-t2x-mobile-phone-small-1.jpg?tr=h-60,w-45,q-80,c-at_max',
    },
    {
        id: 2,
        name: 'Samsung Galaxy S23',
        price: '$19.99',
        specScore: '85%',
        imageSrc: 'https://www.91-img.com/pictures/149249-v4-samsung-galaxy-f23-5g-mobile-phone-small-1.jpg?tr=h-60,w-45,q-80,c-at_max',
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

  return (
    <List>
      {products.map((product) => (
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
      ))}
    </List>
  );
};

export default ProductList;
