import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import deelsdrive1 from './gamezone.webp';
import deelsdrive2 from './deals.webp';
import deelsdrive3 from './comparisons.webp';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      image: 'https://www.91-img.com/pictures/151691-v2-xiaomi-13-mobile-phone-medium-1.jpg?tr=q-80'
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://www.91-img.com/pictures/150934-v4-xiaomi-13-pro-mobile-phone-medium-1.jpg?tr=q-80'
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://www.91-img.com/pictures/148951-v6-oneplus-11-mobile-phone-medium-1.jpg?tr=q-80'
    }
  ];

  return (
    <Carousel>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <p className="legend">{product.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
