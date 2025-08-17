'use client';

import React, { useState, useEffect } from 'react';
import { Box, Image, Flex, Circle } from '@chakra-ui/react';

interface ImageSliderProps {
  images: string[];
  interval?: number; // in ms
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <Box position="relative" width={{base:'100%',md:"400px" }} height="250px" overflow="hidden" borderRadius="md">
      {/* Images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`slide-${index}`}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          transition="opacity 0.5s ease-in-out"
          opacity={index === currentIndex ? 1 : 0}
        />
      ))}

      {/* Dots */}
      <Flex position="absolute" bottom="3" left="50%" transform="translateX(-50%)" gap={2}>
        {images.map((_, index) => (
          <Circle
            key={index}
            size={{base:'5px',md:"10px"}}
            bg={index === currentIndex ? 'white' : 'gray.400'}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ImageSlider;
