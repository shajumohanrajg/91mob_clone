import AndroidIcon from '@mui/icons-material/Android';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FiveGIcon from '@mui/icons-material/FiveG';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RadioIcon from '@mui/icons-material/Radio';
import SimCardIcon from '@mui/icons-material/SimCard';
import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";


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
const YourComponent = () => {
    const classes = useStyles();
  return (
    <Grid container sx={{border:'1px solid #ccc',p:1}}>
      {/* First grid with mobile image */}
      <Grid item xs={12} md={1.5} style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", }}>
        {/* Mobile image */}
        <img
          src="https://www.91-img.com/pictures/146994-v2-apple-iphone-13-pro-max-1tb-mobile-phone-medium-1.jpg?tr=q-80"
          alt="Mobile"
        />
          <Button variant="body1" sx={{fontWeight:'bold',textTransform:'capitalize'}}>+ compare</Button>
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
        
          
              
          <Typography variant="body1" sx={{fontWeight:'bold'}}>Realme C35</Typography>
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
          <p>Rs.6,999</p>
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
    </Grid>
  );
};

export default YourComponent;
