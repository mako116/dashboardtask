'use client';

import React from 'react';
import {
  Box,
   Flex,
   Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import CustomTabs from "@/components/Tab/CustomTab";
import ColumnChart from '@/components/chart/ApexChart';
import CardFlows from './CardFlows';

export const SalesOverView = () => {
  return (
    <Box
      border="1px solid #E4E4E4"
      borderRadius="10px"
      px={4}
      pt={2}
      pb={{ base: 4, md: 0 }}
      bg="white"
      w="100%"
    >
      <Stack>
        <Flex 
       flexWrap={'wrap'}
        justifyContent="space-between" 
        alignItems="center">
          <Stack>
            <Heading
              fontSize={{ base: 16, md: 20 }}
              fontWeight={600}
              fontFamily="CustomBoldFont, sans-serif"
            >
              Sales Overview
            </Heading>
            <Text
            mt={-2}
              fontWeight={400}
              fontFamily="CustomregularFont, sans-serif"
              color={'#606060'}
              fontSize={{ base: 10, md: 12 }}
            >
              Showing overview Jan 2022 - Sep 2022
            </Text>
          </Stack>
           {/* Button */}
          <Stack>
            <IconButton
              aria-label="View Transactions"
              bg="#fff"
              py={4}
              color="#191919"
              border="1px solid #D6D6D6"
              rounded={{ base: 10, md: 30 }}
              fontSize={{ base: 10, md: 10 }}
              w={{ base: "130px", md: "160px" }}
               fontFamily="CustomMediumFonts, sans-serif"
            >
              View Transactions
            </IconButton>
          </Stack>
        </Flex>
        {/* Tabs */}
        <CustomTabs
          defaultValue="members"
          options={[
            { value: "members", label: "1 week" },
            { value: "projects", label: "1 month" },
            { value: "tasks", label: "1 year" },
          ]}
        />

        <HStack  flexDirection={{base:'column',md:'row' }}  align="stretch" borderTop={"1px solid #E4E4E4"} pt={4}>
          {/* Chart  */}
          <Box flex="1">
            <ColumnChart />
          </Box>
          {/* Card Flows */}
          <CardFlows/>
         
        </HStack>
      </Stack>
    </Box>
  );
};
