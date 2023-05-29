import { Box, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import logo from './assets/logo.webp';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    color:'white',
    maxWidth: 'lg', //
    
    padding: theme.spacing(6),
    marginTop: 'auto',
  },
  footerText: {
    color: '#fff', // Change the color value here
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box sx={{mt:2,backgroundColor:'black'}}>
    <footer className={classes.footer}>

      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
 
          <Typography variant="subtitle1" align="center"   className={classes.footerText}>
             
          <img src={logo} alt="Logo" className={classes.logo} />
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" align="center"  className={classes.footerText}>
          Other Links
          </Typography>
          <Typography variant="body2" align="center"   className={classes.footerText}>
            <Link color="inherit" href="/about">
            New Mobile Phones
            </Link>{' '}
            |
            <Link color="inherit" href="/contact">
           Mobile Recharge plans
            </Link>{' '}
            
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        
          <Typography variant="body2" align="center" className={classes.footerText}>
            <Link color="inherit" href="/home">
              Home
            </Link>{' '}
            |
            <Link color="inherit" href="">
              Privacy
            </Link>{' '}
            |
            <Link color="inherit" href="">
              Sitemap
            </Link>
            {' '}
            |
            <Link color="inherit" href="">
            Contact Us
            </Link>{' '}
            |
            {' '}
            |
            <Link color="inherit" href="">
            About Us
            </Link>{' '}
            |
            {' '}
            |
            <Link color="inherit" href="">
            Visitor Agreement
            </Link>{' '}
            |
            {' '}
            |
            <Link color="inherit" href="">
            Terms & Conditions
            </Link>{' '}
            |
            {' '}
            |
            <Link color="inherit" href="">
            91mobiles Hindi
            </Link>{' '}
            |
            {' '}
            |
            <Link color="inherit" href="">
            Feedback
            </Link>{' '}
            |
            {' '}
            |
            <Link color="inherit" href="">
            Mobile Specifications Database
            </Link>{' '}
           
          </Typography>
          <Typography variant="body2" align="center" >
          © 91digital Web Private Limited. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
    </Box>
  );
};

export default Footer;
