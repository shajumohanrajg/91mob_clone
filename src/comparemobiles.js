import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const useStyles = makeStyles({
  card: {
    //maxWidth: 223,
    maxWidth: "100%",
    margin: "0 10px",
    //margin: '0 auto',
    border: "solid 1px #dadada",
    //minHeight: '284px',
    borderRadius: "none",

    //margin: '4px',
    boxShadow: "0 0 3px #ccc",
    "&:hover": {
      borderColor: "#ff5a00",
    },
  },
  button: {
    marginTop: 10,
    borderTop: "solid 1px #c6c6c6",
    height: "26px",
    //bgcolor:  '#e7e7e7',
    textAlign: "center",
    margin: "0 auto",
    cursor: "pointer",
    color: "#545353",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderLeft: "none",
    fontWeight: 400,
    paddingTop: "7px",
    fontSize: "16px",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#ff5a00",
      color: "#fff",
    },
  },
  imageWrapper: {
    // height: 169,
    // width: 223,
    // overflow: 'hidden',
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 4,
    height: 169,
    width: "100%",
  },
  image: {
    // width: '100%',
    // height: '100',
    //height: '100%',
    height: "100%",
    width: "auto",
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
  specScore: {
    background: "#a9c53a none repeat scroll 0 0",
    color: "#fff",
    //float: 'left',
    fontSize: "18px",
    fontWeight: "500",
    width: "35px",
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
    fontSize: "14px",
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

// const CustomPrevArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         height="24px"
//         viewBox="0 0 24 24"
//         width="24px"
//         fill="#000000"
//       >
//         <path d="M0 0h24v24H0V0z" fill="none" />
//         <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
//       </svg>
//     </div>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         height="24px"
//         viewBox="0 0 24 24"
//         width="24px"
//         fill="#000000"
//       >
//         <path d="M0 0h24v24H0V0z" fill="none" />
//         <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
//       </svg>
//     </div>
//   );
// };
const products = [
  {
    id: 1,
    image:
      "https://www.91-img.com/pictures/151580-v2-poco-f5-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Xiomi 13",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 2,
    image:
      "https://www.91-img.com/pictures/150796-v4-oneplus-nord-ce-3-lite-5g-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Oppo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 3,
    image:
      "https://www.91-img.com/pictures/151580-v2-poco-f5-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Oneplus",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 4,
    image:
      "https://www.91-img.com/pictures/150796-v4-oneplus-nord-ce-3-lite-5g-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Iqoo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 5,
    image:
      "https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80",
    title: "samsung",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 6,
    image:
      "https://www.91-img.com/pictures/151580-v2-poco-f5-mobile-phone-medium-1.jpg?tr=q-80",
    title: "vivo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 7,
    image:
      "https://www.91-img.com/pictures/150796-v4-oneplus-nord-ce-3-lite-5g-mobile-phone-medium-1.jpg?tr=q-80",
    title: "oppo",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 8,
    image:
      "https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80",
    title: "iqoo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 9,
    image:
      "https://www.91-img.com/pictures/151580-v2-poco-f5-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Xiomi 13",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 10,
    image:
      "https://www.91-img.com/pictures/150934-v4-xiaomi-13-pro-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Oppo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 11,
    image:
      "https://www.91-img.com/pictures/148951-v6-oneplus-11-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Oneplus",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 12,
    image:
      "https://www.91-img.com/pictures/151580-v2-poco-f5-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Iqoo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 13,
    image:
      "https://www.91-img.com/pictures/150796-v4-oneplus-nord-ce-3-lite-5g-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Lava",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 14,
    image:
      "https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Xiami",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 15,
    image:
      "https://www.91-img.com/pictures/151580-v2-poco-f5-mobile-phone-medium-1.jpg?tr=q-80",
    title: "samsung",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 16,
    image:
      "https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80",
    title: "oppo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 17,
    image:
      "https://www.91-img.com/pictures/150796-v4-oneplus-nord-ce-3-lite-5g-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Xiomi 13",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 18,
    image:
      "https://www.91-img.com/pictures/151580-v2-poco-f5-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Oppo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 19,
    image:
      "https://www.91-img.com/pictures/148951-v6-oneplus-11-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Oneplus",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 20,
    image:
      "https://www.91-img.com/pictures/150317-v4-iqoo-11-5g-mobile-phone-medium-1.jpg?tr=q-80",
    title: "Iqoo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 21,
    image:
      "https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80",
    title: "xiami",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 22,
    image:
      "https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80",
    title: "oppo",
    price: "$29.99",
    specScore: "85%",
  },
  {
    id: 23,
    image:
      "https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80",
    title: "xiami",
    price: "$19.99",
    specScore: "85%",
  },
  {
    id: 24,
    image:
      "https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80",
    title: "oppo",
    price: "$29.99",
    specScore: "85%",
  },
  // Add more products as needed
];
const ProductSlider = () => {
  const classes = useStyles();

  // const settings = {
  //   //dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 960,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //   ],
  //   prevArrow: <CustomPrevArrow />,
  //   nextArrow: <CustomNextArrow />,
  // };

 
  return (
    <>
    <Typography variant="h5" >Latest Mobiles</Typography>
      <Box sx={{ border: "solid 1px #dadada", p: 1 }}>
       
       
        <Grid container direction="row" spacing={0}>
          {products.map((product) => (
            <Grid
              item
              xs={12}
              md={3}
              xl={3}
              sx={{ p: 0.5, border: "1px solid #ccc" }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <img
                    src={product.image}
                    alt="Mobile"
                    width={50}
                    height={50}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#ff6c00" }}>
                    {product.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.specScore}
                    sx={{ fontSize: "10px !important", fontWeight: "bold" }}
                  >
                    <Typography
                      className={classes.specScoreText}
                      sx={{ fontWeight: "bold" }}
                    >
                      {product.specScore}
                    </Typography>
                    SPEC <br></br>SCORE
                  </Typography>
                  <FormControlLabel control={<Checkbox />} label="Compare" />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductSlider;
