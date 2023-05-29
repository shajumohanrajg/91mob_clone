import React from 'react';
import iconsImage from './desktop-category-sprite.png';

const IconComponent = ({ iconIndex }) => {
  const iconWidth = 16; // Width of each individual icon in pixels
  const iconHeight = 47; // Height of each individual icon in pixels
  const iconsPerRow = 1; // Number of icons per row in the PNG file

  // Calculate the position of the icon in the PNG file
  const iconX = (iconIndex % iconsPerRow) * iconWidth;
  const iconY = Math.floor(iconIndex / iconsPerRow) * iconHeight;

  // Construct the style for the img component
  const imgStyle = {
    width: iconWidth,
    height: iconHeight,
    objectFit: 'none',
    objectPosition: `-${iconX}px -${iconY}px`,
  };

  return <img src={iconsImage} style={imgStyle} alt={`Icon ${iconIndex}`} />;
};

export default IconComponent;
