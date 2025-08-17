import IconButtonUI from '@/components/UI/IconButton/IconButton';
import Message from '@/public/assets/message';
import { Box } from '@chakra-ui/react';
import React from 'react';

const MessagePopUp = () => {
  return (
    <Box
      position="fixed"
      bottom={6}
      right={6}
      zIndex={1000}  
    >
      <IconButtonUI
              aria-label="Open Messages"
               borderRadius="full"
              bg="#242526"
       
              _hover={{ bg: '#4b4d4eff' }}
              _active={{ bg: '#242526' }} 
              component={<Message />}      
        />
    </Box>
  );
};

export default MessagePopUp;
