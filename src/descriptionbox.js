import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    //height: '100px', // Adjust the desired height here
    overflow: "hidden",
  },
}));

const MyBox = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("short");

  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setSelectedDescription("full");
    } else {
      setSelectedDescription("short");
    }
  };

  const renderFullDescription = () => {
    return (
      <React.Fragment>
        <Typography variant="body2" sx={{ color: "#5e5e5e", fontSize: "13px" }}>
          The eyes of most tech fanatics are curious about the latest mobiles
          and their new or unique features. 91mobiles serves to your curiosity
          and provides all the information you need to know about the recent
          launched and to be launched phones. We cover phones from all the
          brands including Samsung latest smartphones of 2023 and even the
          lesser known ones, to help you to buy the latest mobile in India.
        </Typography>
        <br></br>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Find the Latest Mobile Phones
        </Typography>
      
        <Typography variant="body2" sx={{ color: "#5e5e5e", fontSize: "13px" }}>
          91mobiles not only keeps you informed about the latest mobile launch
          but also helps you to select the phones with precise specifications
          that you are looking for. On the left hand side of the page, you will
          find `By Feature Links` option that helps you to choose from latest
          phones in India from wide range of prices, operating systems and in
          many other categories.
        </Typography>
        <br></br>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Check the latest Smartphones
        </Typography>
       
        <Typography variant="body2" sx={{ color: "#5e5e5e", fontSize: "13px" }}>
          Keeping the eagerness of the consumers in mind, we bring latest
          mobiles with its features, specifications and many more. This page is
          not restricted to one brand but also has the latest mobile phones. All
          you need to do is click on the link that appears on the left hand side
          under the `By Feature Links` and it will pop up the list of phones
          with the specification or criteria you have selected.
        </Typography>
        <br></br>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Grab the latest mobile of the year
        </Typography>
       
        <Typography variant="body2" sx={{ color: "#5e5e5e", fontSize: "13px" }}>
          Once the search criteria pull up the results, you can check the
          features and specifications of the phone that catches your attention.
          All you need is to click on the name of the phone and you will be
          redirected to the product page and check the latest mobile price from
          different online stores. This gives you detail information about the
          latest mobiles and latest smartphones of the year to help you to take
          an informed decision before buying the latest phone in India.
        </Typography>
        <Link onClick={toggleExpand} component="button">
          Read Less
        </Link>
        {/* Add more components or content for the full description here */}
      </React.Fragment>
    );
  };

  return (
    <Box className={classes.box} sx={{p:2,border:'2px solid #bbbbbc',backgroundColor:"#f9fcff"}}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {" "}
        Latest Mobile Phones in India
      </Typography>
      {selectedDescription === "full" ? (
        renderFullDescription()
      ) : (
        <React.Fragment>
          <Typography
            variant="body2"
            sx={{ color: "#5e5e5e", fontSize: "13px" }}
          >
            The eyes of most tech fanatics are curious about the latest mobiles
            and their new or unique features. 91mobiles serves to your curiosity
            and provides all the information you need to know about the recent
            launched and to be launched phones. We cover phones from all the
            brands including Samsung latest smartphones of 2023 and even the
            lesser known ones, to help you to buy the latest mobile in India....
            <br />
            <Link onClick={toggleExpand} component="button">
              Read More
            </Link>
          </Typography>
        </React.Fragment>
      )}
      {/* {!expanded && selectedDescription === 'full' && (
        <React.Fragment>
          <Typography variant="body1">
            <br />
            <Link onClick={toggleExpand} component="button">
              Read Less
            </Link>
          </Typography>
        </React.Fragment>
      )} */}
    </Box>
  );
};

export default MyBox;
