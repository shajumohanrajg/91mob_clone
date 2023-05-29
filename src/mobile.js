import { Box, Button, Divider, Grid, LinearProgress, ListItem, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles((theme) => ({
  mainImage: {
    width: '100%',
    height: 'auto',
  },
  thumbnailImage: {
    width: 80,
    height: 80,
    cursor: 'pointer',
  },
}));

const MobileProductPage = () => {
  const classes = useStyles();
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
  };
  const handleClose1 = () => {
    setAnchorEl2(null);
  };
  const [mainImage, setMainImage] = useState('path/to/main-image.jpg');

  const handleImageChange = (newImage) => {
    setMainImage(newImage);
  };

  return (
   <>
   <Box sx={{mt:12}}>
    <Grid container spacing={2} sx={{border:'1px solid #ccc'}}>
          <Grid item xs={12} md={4} xl={4}>
            {/* First grid item with image */}
            <img
              src="https://www.91-img.com/pictures/150796-v4-oneplus-nord-ce-3-lite-5g-mobile-phone-large-1.jpg?tr=q-80"
              alt="Your"
            />
          </Grid>
          <Grid item xs={12} md={7} xl={7}>
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 1 }}
            >
              <Grid item>
                <Typography
                  variant="body2"
                  className={classes.specScore}
                  sx={{ fontSize: "10px !important", fontWeight: "bold" }}
                >
                  <Typography
                    className={classes.specScoreText}
                    sx={{ fontWeight: "bold" }}
                  >
                    87%
                  </Typography>
                  SPEC <br></br>SCORE
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">No user Review</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">No Expert Review</Typography>
              </Grid>
              {/* Add more Grid items for additional rows */}
            </Grid>
            {/* <Stack direction='row' spacing={1} justifyContent="space-between"alignItems="center" sx={{p:1}}>
        
                
                <Typography variant="body2" >
                No Expert Review
                </Typography>
        </Stack> */}
            <Divider />

            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 1 }}
            >
              <Typography variant="body1">Rs.19,999 (onwards)</Typography>
              <Button
                variant="text"
                sx={{
                  color: "#ff5500",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                See All Prices
              </Button>

              <Button
                className={classes.button}
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleClick}
                variant="outlined"
                sx={{ textTransform: "capitalize" }}
              >
                Variant
              </Button>

              <Menu
                id="dropdown-menu"
                anchorEl={anchorEl1}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>128GB Storage</MenuItem>
                <MenuItem onClick={handleClose}>256GB Storage</MenuItem>
              </Menu>
              <Button
                className={classes.button}
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleClick1}
                variant="outlined"
                sx={{ textTransform: "capitalize" }}
              >
                Color
              </Button>
              <Menu
                id="dropdown-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose1}
              >
                <MenuItem onClick={handleClose1}>Blue</MenuItem>
                <MenuItem onClick={handleClose1}>Black</MenuItem>
              </Menu>
            </Stack>
            <Divider />
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 1 }}
            >
              <Grid item>
                <img
                  src="https://www.91-img.com/sourceimg/1505825980.png?tr=q-80"
                  alt="bhb"
                ></img>
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  Rs.19,999
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" sx={{ background: "#ff5500" }}>
                  Go to Store
                </Button>
              </Grid>
              {/* Add more Grid items for additional rows */}
            </Grid>

            <Divider />
            <Grid item xs={12} md={12} container>
              <Grid
                item
                xs={12}
                md={3}
                sx={{ backgroundColor: "#f7f7f7", p: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#454545",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
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
              <Grid
                item
                xs={12}
                md={3}
                sx={{ backgroundColor: "#f7f7f7", p: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#454545",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
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
              <Grid
                item
                xs={12}
                md={3}
                sx={{ backgroundColor: "#f7f7f7", p: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#454545",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
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
              <Grid
                item
                xs={12}
                md={3}
                sx={{ backgroundColor: "#f7f7f7", p: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#454545",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
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

            <Divider />
            <Typography variant="h6">5G Phone in India!</Typography>
            <Grid item xs={12} md={12} container>
              <Grid
                item
                xs={12}
                md={3}
                sx={{ backgroundColor: "#f7f7f7", p: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#454545",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Connectivity
                </Typography>
                <br></br>

                <LinearProgress
                  variant="determinate"
                  value={90}
                  color="success"
                  sx={{ bgcolor: "#b7d24c" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{ backgroundColor: "#f7f7f7", p: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#454545",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Enhanced Coverage
                </Typography>
                <br></br>

                <LinearProgress
                  variant="determinate"
                  value={90}
                  color="success"
                  sx={{ bgcolor: "#b7d24c" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{ backgroundColor: "#f7f7f7", p: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#454545",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Superfast 5G
                </Typography>
                <br></br>

                <LinearProgress
                  variant="determinate"
                  value={90}
                  color="success"
                  sx={{ bgcolor: "#b7d24c" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{ backgroundColor: "#f7f7f7", p: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#454545",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Overal 5G Experience
                </Typography>
                <br></br>

                <LinearProgress
                  variant="determinate"
                  value={90}
                  color="success"
                  sx={{ bgcolor: "#b7d24c" }}
                />
              </Grid>
              <Box sx={{ p: 1 }}>
                <Typography variant="body2" sx={{ color: "#454545" }}>
                  1.More spectrum bands supported by a handset would provide
                  wider 5G connectivity across markets.
                </Typography>
                <Typography variant="body2" sx={{ color: "#454545" }}>
                  2.Handset features that can increase the time spent on 5G
                  technology.
                </Typography>
                <Typography variant="body2" sx={{ color: "#454545" }}>
                  3. Features that enhance speeds even in 4G coverage.
                </Typography>
              </Box>
            </Grid>

            <Divider />
            {/* Side grid item with stacked rows */}
            <Grid container direction="column" spacing={2}>
              <Grid item>
                {/* First stacked row */}
                {/* Place your content here */}
              </Grid>
              <Grid item>
                {/* Second stacked row */}
                {/* Place your content here */}
              </Grid>
              <Grid item>
                {/* Third stacked row */}
                {/* Place your content here */}
              </Grid>
              {/* Add more Grid items for additional rows */}
            </Grid>
          </Grid>
        </Grid>
        <br></br>
   

        <Box container spacing={2} >
            <Box x={{p:1,border:'1px solid #ccc'}}>
        <Grid container spacing={2} sx={{border:'1px solid #ccc',p:1}}>
          {/* First Grid */}
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Key Specs
            </Typography>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={6} md={4} xl={4} sm={4}>
            <ListItem sx={{ fontWeight: "medium" }}>RAM</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Processor</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Rear Camera</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Front Camera</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Battery</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Display</ListItem>
          </Grid>

          {/* Third Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem> 8 GB</ListItem>
            <ListItem> Qualcomm Snapdragon 695</ListItem>
            <ListItem>108 MP + 2 MP + 2 MP</ListItem>
            <ListItem>16 MP</ListItem>
            <ListItem>5000 mAh</ListItem>
            <ListItem> 6.72 inches (17.07 cm)</ListItem>
          </Grid>
        </Grid>
        </Box>
        <br></br>
        <Box x={{p:1,border:'1px solid #ccc',boxShadow: 2}}>
        <Grid container spacing={2} sx={{border:'1px solid #ccc',p:1}}>
          {/* First Grid */}
          <Grid item  xs={12} sm={12} md={4} xl={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            General

            </Typography>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem sx={{ fontWeight: "medium" }}>Launch Date</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Operating System</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Custom UI</ListItem>
            
          </Grid>

          {/* Third Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem>April 11, 2023 (Official)</ListItem>
            <ListItem>	Android v13</ListItem>
            <ListItem>	Oxygen OS</ListItem>
            
          </Grid>
        </Grid>
        </Box>
        <br></br>
        <Grid container spacing={2} sx={{border:'1px solid #ccc',p:1}}>
          {/* First Grid */}
          <Grid item  xs={12} sm={12} md={4} xl={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Performance

            </Typography>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem sx={{ fontWeight: "medium" }}>Chipset</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>CPU</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Architecture</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Fabrication</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Graphics</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>RAM</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>RAM Type</ListItem>
          </Grid>

  
          <Grid item xs={6} md={4} xl={4} sm={6}>
<ListItem >Qualcomm Snapdragon 695</ListItem>
<ListItem >	Octa core (2.2 GHz, Dual core, Kryo 660 + 1.7 GHz, Hexa Core, Kryo 660)</ListItem>
<ListItem >64 bit</ListItem>
<ListItem >	6 nm</ListItem>
<ListItem >Adreno 619</ListItem>
<ListItem >	8 GB</ListItem>
<ListItem >	LPDDR4X</ListItem>
</Grid>
        </Grid>
        <br></br>
        <Grid container spacing={2} sx={{border:'1px solid #ccc',p:1}}>
          {/* First Grid */}
          <Grid item  xs={12} sm={12} md={4} xl={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Design
            </Typography>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem sx={{ fontWeight: "medium" }}>Height</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Width</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Thickness</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Weight</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Material</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Colours</ListItem>
            
          </Grid>

  
          <Grid item xs={6} md={4} xl={4} sm={6}>
<ListItem >165.5 mm </ListItem>
<ListItem >	76 mm</ListItem>
<ListItem 	>8.3 mm</ListItem>
<ListItem >	195 grams</ListItem>
<ListItem >	Back: Plastic</ListItem>
<ListItem >	Pastel Lime, Chromatic Gray</ListItem>

</Grid>
        </Grid>
        <br></br>
        <Grid container spacing={2} sx={{border:'1px solid #ccc',p:1}}>
          {/* First Grid */}
          <Grid item  xs={12} sm={12} md={4} xl={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Battery
            </Typography>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem sx={{ fontWeight: "medium" }}>Capacity</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Type</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Removable</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Quick Charging</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>USB Type-C</ListItem>
          
            
          </Grid>

  
          <Grid item xs={6} md={4} xl={4} sm={6}>
<ListItem >5000 mAh </ListItem>
<ListItem >		Li-Polymer</ListItem>
<ListItem 	>No</ListItem>
<ListItem >	Yes, Super VOOC, 67W: 80 % in 30 minutes</ListItem>
<ListItem >Yes</ListItem>


</Grid>
        </Grid>
        <br></br>
        <Grid container spacing={2} sx={{border:'1px solid #ccc',p:1}}>
          {/* First Grid */}
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Storage

            </Typography>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem sx={{ fontWeight: "medium" }}>Internal Memory</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Expandable Memory</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Storage Type</ListItem>
            
          </Grid>

          {/* Third Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem>128 GB</ListItem>
            <ListItem>Yes, Up to 1 TB</ListItem>
            <ListItem>UFS 2.2</ListItem>
            
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={2} sx={{border:'1px solid #ccc',p:1}}>
          {/* First Grid */}
          <Grid item  xs={12} sm={12} md={4} xl={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Sensors

            </Typography>
          </Grid>

          {/* Second Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem sx={{ fontWeight: "medium" }}>
Fingerprint Sensor</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Fingerprint Sensor Position</ListItem>
            <ListItem sx={{ fontWeight: "medium" }}>Other Sensors</ListItem>
            
          </Grid>

          {/* Third Grid */}
          <Grid item xs={6} md={4} xl={4} sm={6}>
            <ListItem>Yes</ListItem>
            <ListItem>Side</ListItem>
            <ListItem>	Light sensor, Proximity sensor, Accelerometer, Compass, Gyroscope</ListItem>
            
          </Grid>
        </Grid>
        </Box>
        </Box></>
  );
};

export default MobileProductPage;
