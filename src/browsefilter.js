import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import AndroidIcon from '@mui/icons-material/Android';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FiveGIcon from '@mui/icons-material/FiveG';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RadioIcon from '@mui/icons-material/Radio';
import SimCardIcon from '@mui/icons-material/SimCard';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Chip, FormControl, FormControlLabel, FormLabel, Grid, LinearProgress, Radio, RadioGroup, Slider, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';

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
    background: '#c2d57d none repeat scroll 0 0',
    color: '#fff',
    //float: 'left',
    fontSize: '18px',
    fontWeight: '500',
    right: 0,
  //   marginRight:  '10px',
  //   padding: '2px 3px 3px 4px',
    // position: 'absolute',
    textAlign: 'left',
    top: 0,
  //   width: '36px',
  //  zIndex: 1,
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

const ProductBrowser = () => {

  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedPopular, setSelectedPopular] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    const filtered = products
      .filter(product => product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1])
      .filter(product => selectedFeatures.every(feature => product.features.includes(feature)))
      .filter(product => selectedBrands.length === 0 || selectedBrands.includes(product.brand))
      .sort((a, b) => (selectedPopular ? b.popularity - a.popularity : 0));

    setFilteredProducts(filtered);
  }, [products, selectedPriceRange, selectedFeatures, selectedPopular, selectedBrands]);

  const handlePriceRangeChange = (event, newValue) => {
    setSelectedPriceRange(newValue);
  };

  const handleMinPriceChange = (event) => {
    const minValue = event.target.value;
    setSelectedPriceRange([parseInt(minValue), selectedPriceRange[1]]);
  };

  const handleMaxPriceChange = (event) => {
    const maxValue = event.target.value;
    setSelectedPriceRange([selectedPriceRange[0], parseInt(maxValue)]);
  };

  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFeatures(prevFeatures => {
      if (checked) {
        return [...prevFeatures, value];
      } else {
        return prevFeatures.filter(feature => feature !== value);
      }
    });
  };

  const handlePopularChange = (event) => {
    setSelectedPopular(event.target.checked);
  };

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    setSelectedBrands(prevBrands => {
      if (checked) {
        return [...prevBrands, value];
      } else {
        return prevBrands.filter(brand => brand !== value);
      }
    });
  };

  const handleRemoveFeature = (feature) => {
    setSelectedFeatures(prevFeatures => prevFeatures.filter(f => f !== feature));
  };

  const handleRemoveBrand = (brand) => {
    setSelectedBrands(prevBrands => prevBrands.filter(b => b !== brand));
  };

  const handlePriceRangeRadioChange = (event) => {
    const { value } = event.target;
    const [minRange, maxRange] = value.split('-').map(Number);
    setSelectedPriceRange([minRange, maxRange]);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} xl={4}>
          <div className="sidebar">
            <h3>Browse By Filters</h3>
            <Accordion defaultExpanded sx={{border:'1px solid #CCC'}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{backgroundColor:'#f7f7f7'}}>
                <h4>Price Range</h4>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Slider
                    value={selectedPriceRange}
                    onChange={handlePriceRangeChange}
                    min={0}
                    max={10000}
                    step={10}
                    valueLabelDisplay="auto"
                  />
                  {/* <div>
                    <TextField
                      label="Min"
                      variant="outlined"
                      value={selectedPriceRange[0]}
                      onChange={handleMinPriceChange}
                    />
                    <TextField
                      label="Max"
                      variant="outlined"
                      value={selectedPriceRange[1]}
                      onChange={handleMaxPriceChange}
                    />
                  </div> */}
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
      size='small'
        label="Low Value in Rs"
        value={selectedPriceRange[0]}
                      onChange={handleMinPriceChange}
      />
      <Box sx={{ mx: 1 }}>to</Box>
      <TextField
      size='small'
        label="High Value in Rs"
        value={selectedPriceRange[1]}
                      onChange={handleMaxPriceChange}
      />
      
    </Box>
                </div>
                <br></br>
                <FormControl component="fieldset">
        <FormLabel component="legend">Predefined Price Ranges</FormLabel>
        <RadioGroup row value={`${selectedPriceRange[0]}-${selectedPriceRange[1]}`} onChange={handlePriceRangeRadioChange}>
          <FormControlLabel value="0-10000" control={<Radio />} label="Under Rs.10,000" />
          <FormControlLabel value="10000-20000" control={<Radio />} label="Rs.10,000 - Rs.20,000" />
          <FormControlLabel value="20000-30000" control={<Radio />} label="Rs.20,000 - Rs.30,000" />
          <FormControlLabel value="30000-40000" control={<Radio />} label="Rs.30,000 - Rs.40,000" />
        </RadioGroup>
      </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded x={{border:'1px solid #CCC'}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{backgroundColor:'#f7f7f7'}}>
                <h4>Features</h4>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                {featuresData.map(brand => (
                    <FormControlLabel
                      key={brand}
                      control={<Checkbox value={brand}onChange={handleFeatureChange} />}
                      label={brand}
                    />
                  ))}
                  {/* <FormControlLabel
                    control={<Checkbox value="5G" onChange={handleFeatureChange} />}
                    label="5G"
                  />
                  <FormControlLabel
                    control={<Checkbox value="A14 Bionic chip" onChange={handleFeatureChange} />}
                    label="A14 Bionic chip"
                  />
                  <FormControlLabel
                    control={<Checkbox value="Exynos 2100" onChange={handleFeatureChange} />}
                    label="Exynos 2100"
                  />
                  <FormControlLabel
                    control={<Checkbox value="Snapdragon 765G" onChange={handleFeatureChange} />}
                    label="Snapdragon 765G"
                  /> */}
                </div>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h4>Popular</h4>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <FormControlLabel
                    control={<Checkbox checked={selectedPopular} onChange={handlePopularChange} />}
                    label="Show Popular Only"
                  />
                </div>
              </AccordionDetails>
            </Accordion> */}
            <Accordion defaultExpanded x={{border:'1px solid #CCC'}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{backgroundColor:'#f7f7f7'}}>
                <h4>Brand</h4>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {brandsData.map(brand => (
                    <FormControlLabel
                      key={brand}
                      control={<Checkbox value={brand} onChange={handleBrandChange} />}
                      label={brand}
                    />
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
            <div className="selected-filters">
              {selectedFeatures.map(feature => (
                <Chip
                  key={feature}
                  label={feature}
                  onDelete={() => handleRemoveFeature(feature)}
                  color="primary"
                />
              ))}
              {selectedBrands.map(brand => (
                <Chip
                  key={brand}
                  label={brand}
                  onDelete={() => handleRemoveBrand(brand)}
                  color="secondary"
                />
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8} xl={8}>
      
          <div className="products" >
            <br></br>
            <br></br>
            <br></br>
            {filteredProducts.map(product => (
              <Button href="/mobiles" sx={{color:'black'}}>
          <Grid container sx={{border:'1px solid #ccc',p:1}} key={product.id}>
      {/* First grid with mobile image */}
      <Grid item xs={12} md={2} style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", }}>
        {/* Mobile image */}
        <img
          src="https://www.91-img.com/pictures/146994-v2-apple-iphone-13-pro-max-1tb-mobile-phone-medium-1.jpg?tr=q-80"
          alt="Mobile"
        />
        <br></br>
          <Button variant="body1" sx={{fontWeight:'bold',textTransform:'capitalize'}}>+ compare</Button>
          <Typography variant="body1" sx={{fontWeight:'bold'}}>{product.brand}</Typography>
      </Grid>

      {/* Right side grid */}
      <Grid item xs={12} md={9} container>
        {/* Top left specscore percentage */}
        <Grid item xs={12} md={0.6}><Typography variant="body2" className={classes.specScore} sx={{fontSize:'10px !important',fontWeight:'bold'}}>
                <Typography className={classes.specScoreText} sx={{fontWeight:'bold'}} >85%</Typography>
                 SPEC  <br></br>SCORE
                </Typography></Grid>
        <Grid item xs={12} md={3} sx={{ml:1}}>
          {/* <p>Specscore: 80%</p> */}
        
          
              
          <Typography variant="body1" sx={{fontWeight:'bold'}}>{product.name}</Typography>
          <Typography variant="caption" component="div" ><AndroidIcon color="success" sx={{ fontSize: 18 }} />Android V11</Typography>

        </Grid>

        {/* Top right price */}
        <Grid
          item
          xs={12}
          md={8}
          container
          justifyContent="flex-end"
          alignItems="center"
          style={{ textAlign: "right", fontWeight: "bold", fontSize: "20px",color:"#ff5a00" }}
        >
          <p>Rs.{product.price}</p>
        </Grid>

        {/* Title and caption */}
        <Grid item xs={12} md={12} container>
          <Grid item xs={12} md={3} sx={{ backgroundColor: "#f7f7f7", p: 1 }}>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontWeight: "bold", fontSize: "14px" }}
            >
              Performance
            </Typography>
            <br></br>

            <LinearProgress
              variant="determinate"
              value={90}
              color="success"
              sx={{ bgcolor: "#b7d24c" }}
            />
            <br></br>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              Octa core (1.82 GHz, Dual){" "}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              Unisoc T612
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              2 GB RAM
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ backgroundColor: "#f7f7f7", p: 1 }}>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontWeight: "bold", fontSize: "14px" }}
            >
              Display
            </Typography>
            <br></br>

            <LinearProgress
              variant="determinate"
              value={90}
              color="success"
              sx={{ bgcolor: "#b7d24c" }}
            />
            <br></br>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              6.5 inches (16.51 cm){" "}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              270 PPI, IPS LCD
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              60 Hz Refresh Rate
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ backgroundColor: "#f7f7f7", p: 1 }}>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontWeight: "bold", fontSize: "14px" }}
            >
              Camera
            </Typography>
            <br></br>

            <LinearProgress
              variant="determinate"
              value={90}
              color="success"
              sx={{ bgcolor: "#b7d24c" }}
            />
            <br></br>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              8 MP Primary Camera{" "}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              LED Flash
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              5 MP Front Camera
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ backgroundColor: "#f7f7f7", p: 1 }}>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontWeight: "bold", fontSize: "14px" }}
            >
              Battery
            </Typography>
            <br></br>

            <LinearProgress
              variant="determinate"
              value={90}
              color="success"
              sx={{ bgcolor: "#b7d24c" }}
            />
            <br></br>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              5000 mAh
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              Micro-USB Port
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#454545", fontSize: "12px" }}
            >
              Non-Removable
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom left icons */}
        <Grid
          item
          xs={12}
          md={6}
          container
          alignItems="flex-end"
          style={{ marginBottom: "0px" }}
        >
          <br></br>
          <Grid item xs={6}>
            <SimCardIcon sx={{color:'gray'}}/>
            <FiveGIcon sx={{color:'gray'}} />
            <ElectricalServicesIcon sx={{color:'gray'}} />
            <FingerprintIcon sx={{color:'gray'}} />
            <LocalPhoneIcon sx={{color:'gray'}} />
            <RadioIcon sx={{color:'gray'}} />
          </Grid>
          {/* <Grid item xs={6}>
            <FavoriteIcon />
          </Grid> */}
        </Grid>

        {/* Bottom right button */}
        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent="flex-end"
          alignItems="center"
          style={{ marginBottom: "0px" }}
        >
          <Button
            
            color="primary"
            sx={{fontWeight:'bold',textTransform:'capitalize',color:'#6294ce'}}
            //style={{ backgroundColor: "green", color: "white" }}
          >
            See full Specifications
          </Button>
        </Grid>
      </Grid>
    </Grid> </Button> ))}

 
            {/* <Grid container spacing={2}>
              {filteredProducts.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Card>
                    <h4>{product.name}</h4>
                    <p>Price: ${product.price}</p>
                    <p>Features: {product.features.join(", ")}</p>
                    <p>Popularity: {product.popularity}</p>
                  </Card>
                </Grid>
              ))}
            </Grid> */}
          </div>
       
    

      </Grid>
      </Grid>
      {/* <Grid container direction="row" spacing={2}>
  <Grid item xs={12} md={4} sx={{ p: 0.5, border: '1px solid #ccc' }}>
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

  <Grid item xs={12} md={4} sx={{ p: 0.5, border: '1px solid #ccc' }}>
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

  <Grid item xs={12} md={4} sx={{ p: 0.5, border: '1px solid #ccc' }}>
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
</Grid> */}
           
    </div>
  );
};

const productsData = [
  {
    id: 1,
    name: "iPhone 12",
    price: 9999,
    features: ["5G", "A14 Bionic chip", "Super Retina XDR display"],
    popularity: 9,
    brand: "Apple",
    imgsrc:'https://www.91-img.com/pictures/150255-v4-vivo-t2-mobile-phone-medium-1.jpg?tr=q-80'
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 7999,
    features: ["5G", "Exynos 2100", "Dynamic AMOLED 2X display"],
    popularity: 8,
    brand: "Samsung",
    imgsrc:'https://www.91-img.com/pictures/148192-v6-samsung-galaxy-a54-5g-mobile-phone-medium-1.jpg?tr=q-80'
  },
  {
    id: 3,
    name: "Google Pixel 5",
    price: 6999,
    features: ["5G", "Snapdragon 765G", "OLED display"],
    popularity: 7,
    brand: "Google",
    imgsrc:'https://www.91-img.com/pictures/150341-v2-vivo-v27-pro-mobile-phone-medium-1.jpg?tr=q-80'
  },
  {
    id: 4,
    name: "OnePlus 9 Pro",
    price: 8999,
    features: ["5G", "Snapdragon 888", "Fluid AMOLED display"],
    popularity: 8,
    brand: "OnePlus",
    imgsrc:'https://www.91-img.com/pictures/150796-v4-oneplus-nord-ce-3-lite-5g-mobile-phone-medium-1.jpg?tr=q-80'
  },
  // Add more mobile phone products
];

const brandsData = ["Realme", "Poco", "Xiaomi", "Oppo", "Vivo"];
const featuresData = ["5G","A14 Bionic chip","Exynos 2100","Snapdragon 765G"];
const mobiles = [
  {
    id: 1,
    imageSrc: 'path/to/mobile1.png',
    name: 'Mobile 1',
    price: '$199',
  },
  {
    id: 2,
    imageSrc: 'path/to/mobile2.png',
    name: 'Mobile 2',
    price: '$299',
  },
  // Add more mobile items here
];


export default ProductBrowser;
