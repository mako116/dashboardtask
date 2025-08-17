
import ViewArrow from '@/public/assets/viewArrow';
import { Box, Card, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface Stat {
  label: string;
  value: string | number;
}

interface OverviewCardProps {
  icon: React.ElementType;
  title: string;
  stats: Stat[];
}

export const OverviewCard: React.FC<OverviewCardProps> = ({ icon: Icon, title, stats }) => {
  return (
    <Card.Root  h={156} size="md" overflow={'hidden'} rounded={{ base: 10, md: 12 }}>
      <Card.Header
        bg="#F9FAFB"
        pb={3}
        pt={4}
        borderBottom="1px solid #E4E4E4"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={5}
       
        color="#4545FE"
      >
        <Flex align="center" gap={2}>
          <Icon />
          <Text fontSize={14} fontFamily="CustomMediumFonts, sans-serif" color="#292929">
            {title}
          </Text>
        </Flex>
        <Flex align="center" gap={1}>
          <Text fontFamily="CustomMediumFonts, sans-serif" fontSize={12} color="#4545FE">
            View all
          </Text>
          <ViewArrow />
        </Flex>
      </Card.Header>
      <Card.Body
        pr={6}
        flexDirection="row"
        justifyContent="space-between"
        gap={1}
        fontSize={10}
        fontFamily="CustomMediumFonts, sans-serif"
        color="#3D3D3D"
      >
        {stats.map((stat) => (
          <Stack key={stat.label}>
            <Text fontFamily="CustomregularFont, sans-serif" color="#525252">
              {stat.label}
            </Text>
            <Text
              fontSize={24}
              fontWeight={600}
              fontFamily="CustomBoldFont, sans-serif"
              color="#141414"
            >
              {stat.value}
            </Text>
          </Stack>
        ))}
      </Card.Body>
    </Card.Root>
  );
};


