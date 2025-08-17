'use client';

import React, { useState, useEffect } from 'react';
import { Box, Image, Flex, Circle, Text } from '@chakra-ui/react';

interface Slide {
  src: string;
  title?: string;
  subtitle?: string;
}

interface ImageSliderProps {
  images: Slide[];
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

  const currentSlide = images[currentIndex];

  return (
    <Box
      position="relative"
      width={{ base: '100%', md: '400px' }}
      height="250px"
      overflow="hidden"
      borderRadius="md"
    >
      {/* Images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.src}
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

      {/* Title + Subtitle for current image */}
      {(currentSlide.title || currentSlide.subtitle) && (
        <Box
          position="absolute"
          bottom="8"
          left="0"
          // transform="translateX(-50%)"
         
          color="white"
          px={4}
        >
          {currentSlide.title && (
            <Text
              fontSize={{ base: '12', md: '14' }}
              fontWeight="normal"
              fontFamily="CustomregularFont, sans-serif" 
              mb={1}
             >
              {currentSlide.title}
            </Text>
          )}
          {currentSlide.subtitle && (
            <Text
             fontFamily="CustomBoldFont, sans-serif" 
            fontSize={{ base: '20', md: '24' }} 
            >
              {currentSlide.subtitle}
            </Text>
          )}
        </Box>
      )}

      {/* Dots */}
      <Flex position="absolute" bottom="3" left="50%" transform="translateX(-50%)" gap={2}>
        {images.map((_, index) => (
          <Circle
            key={index}
            size={{ base: '5px', md: '10px' }}
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
