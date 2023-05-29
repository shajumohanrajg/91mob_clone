import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
  useMediaQuery,
  Box
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from 'react';
import logo from "./assets/logo.webp";

//const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#262626",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${theme.drawerWidth}px)`,
      marginLeft: theme.drawerWidth,
    },
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: theme.drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: theme.drawerWidth,
  },
//   toolbar: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
toolbar: {
    display: 'flex',
    //justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  logo: {
    marginRight: theme.spacing(2),
    width: "132px",
    aspectRatio: " auto 132 / 30",
    height: "30px",
  },
//   searchField: {
//     width: '200px', // Adjust the width as needed
//     marginRight: theme.spacing(2),
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('md')]: {
//       width: 'auto',
//       position: 'absolute',
//       right: 0,
//       top: '100%',
//       transform: 'translateY(20px)',
//       visibility: 'hidden',
//       opacity: 0,
//       transition: 'visibility 0s linear 0.2s, opacity 0.2s',
//     },
//     '&:focus': {
//       width: '300px', // Adjust the expanded width as needed
//       [theme.breakpoints.up('md')]: {
//         visibility: 'visible',
//         opacity: 1,
//         transition: 'visibility 0s linear 0s, opacity 0.2s',
//       },
//     },
//   },
  searchField: {
    marginRight: theme.spacing(2),
    backgroundColor:'white',
    color:'#262626',
    borderRadius: 5,
    transition: theme.transitions.create("width"),
    "&:focus": {
      width: "300px",
    },
    // border: '0',
    // float: 'left',
    // fontSize: '13px',
    // height: '34px',
    // lineHeight: '18px',
    // padding: '8px 10px',
    // width: '410px',
    // // box-sizing: 'border-box !important',
    // // -webkit-box-sizing: 'border-box !important',
    // // -moz-box-sizing: 'border-box !important',
    // borderRadius:  '3px 0 0 3px',
    // marginLeft: '0 !Important'
  },
  searchButton: {
    marginLeft: theme.spacing(1),
  },
  loginButton: {
    color:"white !important",
    marginLeft: "auto",
    textTransform: 'capitalize'
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const isMobileOrTablet = useMediaQuery("(max-width: 960px)");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const [expanded, setExpanded] = useState(false);

  const handleSearchClick = () => {
    setExpanded(!expanded);
  };

  const toggleDrawer = () => {
    if (isMobileOrTablet) {
      setIsDrawerOpen(!isDrawerOpen);
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={classes.appBar}
        sx={{ backgroundColor: "#262626" }}
      >
        <Container maxWidth="md">
          <Toolbar className={classes.toolbar}>
            {isMobileOrTablet && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer}
                className={classes.menuButton}
              >
                <MenuRoundedIcon />
              </IconButton>
            )}
            <img src={logo} alt="Logo" className={classes.logo} />
            {isMobileOrTablet ? (
            <SearchIcon onClick={handleSearchClick} />
          ) : (
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search for products"
              className={classes.searchField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {/* <Button sx={{marginLeft: 8}}> */}
                    <SearchIcon />
                    {/* </Button> */}
                  </InputAdornment>
                ),
                // endAdornment: (
                //               <InputAdornment position="end"  sx={{p:'none',m:'none'}}>
                //                 <Button variant="contained" color="primary" disableElevation sx={{p:'none',m:'none'}}>
                //                 <SearchIcon />
                //                   Search
                //                 </Button>
                //               </InputAdornment>
                //             ),
              }}
              onFocus={handleSearchClick}
              onBlur={handleSearchClick}
            />
            // <TextField
            //   variant="outlined"
            //   size="small"
            //   placeholder="Search"
            //   className={classes.searchField}
            //   InputProps={
            //     {
            //       //   startAdornment: (
            //       //     <InputAdornment position="start">
            //       //       <SearchIcon />
            //       //     </InputAdornment>
            //       //   ),
            //       //   endAdornment: (
            //       //     <InputAdornment position="end">
            //       //       <Button variant="contained" color="primary" disableElevation>
            //       //       <SearchIcon />
            //       //         Search
            //       //       </Button>
            //       //     </InputAdornment>
            //       //   ),
            //     }
            //   }
            // />  
            )}
              {/* <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            className={classes.searchField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" onClick={handleSearchClick}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onFocus={handleSearchClick}
            onBlur={handleSearchClick}
          /> */}
            {isMobileOrTablet ? null : (
              <Button
                variant="standard"
                color="primary"
                className={classes.loginButton} sx={{textTransform:'capitalize',color:'',}}
              >
                Login / SignUp
              </Button>
            )}
             {isMobileOrTablet ? null : (
              <Box sx={{mr:1}}>
              <Button
                variant="contained"
                color="primary"
                href="/"
                className={classes.loginButton} sx={{textTransform:'capitalize',backgroundColor:'#ff5500',color:'white'}}
              >
                Home
              </Button>
              </Box>
            )}
             {isMobileOrTablet ? null : (
              <Button
                variant="contained"
                color="primary"
                href="/latestmobiles"
                className={classes.loginButton} sx={{textTransform:'capitalize',backgroundColor:'#ff5500',color:'white'}}
              >
                Latest Mobiles
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* {isMobileOrTablet && expanded && (
          <Toolbar className={classes.toolbar}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              className={classes.searchField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              autoFocus
              onBlur={handleSearchClick}
            />
          </Toolbar>
        )} */}
      {isMobileOrTablet && (
        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          //sx={{backgroundColor:'black'}}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <List>
            <ListItem >
              <Button  href="/" sx={{fontWeight:'bold',textTransform:'capitalize'}} variant="outlined" size="small">
              <ListItemText primary="Home"  />
              </Button>
            </ListItem>
            <ListItem>
            <Button  href="/latestmobiles" sx={{fontWeight:'bold',textTransform:'capitalize'}} variant="outlined" size="small">
              <ListItemText primary="Mobiles"  />
              </Button>
            </ListItem>
            {/* <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Contact" />
            </ListItem> */}
          </List>
        </Drawer>
      )}
    </React.Fragment>
  );
};

export default NavBar;
