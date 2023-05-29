import { Carousel, CarouselItem } from "@mui/material";
import React, { useState } from "react";

const ProductCarousel = () => {
  const [products, setProducts] = useState([
    {
      title: "Product 1",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Product 2",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Product 3",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Product 4",
      image: "https://via.placeholder.com/350x150",
    },
  ]);

  return (
    <Carousel>
      {products.map((product, index) => (
        <CarouselItem key={index}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;