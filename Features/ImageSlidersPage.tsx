import ImageSlider from '@/components/image/ImageSlider';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const ImageSlidersPage = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={4} my={4} px={4}>
      {/* Slider 1 */}
      <Box flex="1" borderRadius="lg" overflow="hidden">
        <ImageSlider
          images={[
            { src: '/assets/sky.png', title: 'MOST CLICKED', subtitle: 'Urban Prime Plaza Premiere' },
            { src: '/assets/apart.png', title: 'MOST CLICKED', subtitle: 'Urban Prime Plaza Premiere' },
            { src: '/assets/sky.png',  title: 'MOST CLICKED', subtitle: 'Urban Prime Plaza Premiere' },
          ]}
          interval={4000}
        />
      </Box>

      {/* Slider 2 */}
      <Box flex="1" borderRadius="lg" overflow="hidden">
        <ImageSlider
          images={[
            { src: '/assets/apart.png', title: 'MOST WATCHLISTED', subtitle: 'Urban Prime Plaza Premiere' },
            { src: '/assets/sky.png', title: 'MOST WATCHLISTED', subtitle: 'Perfect weather outside' },
            { src: '/assets/apart.png', title: 'MOST WATCHLISTED', subtitle: 'Comfort at its best' },
          ]}
          interval={4000}
        />
      </Box>

      {/* Slider 3 */}
      <Box flex="1" borderRadius="lg" overflow="hidden">
        <ImageSlider
          images={[
            { src: '/assets/sky.png', title: 'HOTTEST LISTING', subtitle: 'Urban Prime Plaza Premiere' },
            { src: '/assets/apart.png', title: 'HOTTEST LISTING', subtitle: 'Feel at home' },
            { src: '/assets/sky.png', title: 'HOTTEST LISTING', subtitle: 'Urban Prime Plaza Premiere' },
          ]}
          interval={4000}
        />
      </Box>
    </Flex>
  );
};

export default ImageSlidersPage;
