import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { SalesOverView } from './SalesOverView'
import { Listings } from './Listings'
import ImageSlidersPage from './ImageSlidersPage'
import MessagePopUp from './MessagePopUp'

export const Dashboard = () => {
  return (
    <Box  bg="#fff">
      <Text mt={-2} fontFamily="CustomBoldFont, sans-serif">Welcome, Ahmed</Text>
        <HStack pt={2} w="100%"  flexDirection={{base:'column',md:'row' }}  align="center" gap={4} >
            <SalesOverView/>
            <Listings/>
        </HStack>
        {/* image slider */}
        <ImageSlidersPage/>
        {/* Fixed message */}
        <MessagePopUp/>
    </Box>
  )
}
