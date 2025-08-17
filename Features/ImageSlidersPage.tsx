import ImageSlider from '@/components/image/ImageSlider';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const ImageSlidersPage = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={4}
      my={4}
      px={4}
    >
      {[0, 1, 2].map((idx) => (
        <Box key={idx} flex="1" borderRadius="lg" overflow="hidden">
          <ImageSlider
            images={[
              '/assets/sky.png',
              '/assets/apart.png',
              '/assets/sky.png',
            ]}
            interval={4000}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default ImageSlidersPage;
