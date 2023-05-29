import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Grid, Menu, MenuItem, Toolbar } from '@mui/material';
import React from 'react';

const ToolbarComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeButton, setActiveButton] = React.useState(null);
  
    const handleMenuOpen = (event, buttonId) => {
      setAnchorEl(event.currentTarget);
      setActiveButton(buttonId);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      setActiveButton(null);
    };

  return (
    <Toolbar sx={{mt:7,boxShadow:2}} justifyContent="center" alignItems="center" >
    <Button
      color="inherit"
      aria-controls="menu1"
      aria-haspopup="true"
      onMouseEnter={(event) => handleMenuOpen(event, 'button1')}
      endIcon={<ArrowDropDownIcon />}
    >
    Mobiles & Tablets
    </Button>
    <Menu
      id="menu1"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl) && activeButton === 'button1'}
      onClose={handleMenuClose}
       onMouseLeave={handleMenuClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MenuItem onClick={handleMenuClose}>Latest Mobiles</MenuItem>
        </Grid>
        <Grid item xs={4}>
          <MenuItem onClick={handleMenuClose}>New Mobiles</MenuItem>
        </Grid>
        <Grid item xs={4}>
          <MenuItem onClick={handleMenuClose}>Top 10</MenuItem>
        </Grid>
      </Grid>
    </Menu>

    <Button
      color="inherit"
      aria-controls="menu2"
      aria-haspopup="true"
      onMouseEnter={(event) => handleMenuOpen(event, 'button2')}
      endIcon={<ArrowDropDownIcon />}
    >
     Top 10
    </Button>
    <Menu
      id="menu2"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl) && activeButton === 'button2'}
      onClose={handleMenuClose}
      onMouseLeave={handleMenuClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MenuItem onClick={handleMenuClose}>Item 4</MenuItem>
        </Grid>
        <Grid item xs={4}>
          <MenuItem onClick={handleMenuClose}>Item 5</MenuItem>
        </Grid>
        <Grid item xs={4}>
          <MenuItem onClick={handleMenuClose}>Item 6</MenuItem>
        </Grid>
      </Grid>
    </Menu>
    <Button
      color="inherit"
      aria-controls="menu2"
      aria-haspopup="true"
      onMouseEnter={(event) => handleMenuOpen(event, 'button2')}
      endIcon={<ArrowDropDownIcon />}
    >
     Compare
    </Button>
    <Button
      color="inherit"
      aria-controls="menu2"
      aria-haspopup="true"
      onMouseEnter={(event) => handleMenuOpen(event, 'button2')}
      endIcon={<ArrowDropDownIcon />}
    >
     Upcoming Mobiles
    </Button>
    <Button
      color="inherit"
      aria-controls="menu2"
      aria-haspopup="true"
      onMouseEnter={(event) => handleMenuOpen(event, 'button2')}
      endIcon={<ArrowDropDownIcon />}
    >
    Electronics
    </Button>
    <Button
      color="inherit"
      aria-controls="menu2"
      aria-haspopup="true"
      onMouseEnter={(event) => handleMenuOpen(event, 'button2')}
      endIcon={<ArrowDropDownIcon />}
    >
    More
    </Button>
  </Toolbar>
  );
};

export default ToolbarComponent;
