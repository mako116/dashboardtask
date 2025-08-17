import { OverviewCard } from '@/components/cards/Cards';
import Listenin from '@/public/assets/listenin';
import Userss from '@/public/assets/userss';
import { Box, Stack } from '@chakra-ui/react';

export const Listings = () => {
  const cardsData = [
    {
      icon: Listenin,
      title: 'Listings OverView',
      stats: [
        { label: 'Total', value: '1.8k' },
        { label: 'Active', value: 80 },
        { label: 'Archived', value: '1k' },
      ],
    },
    {
      icon: Userss,
      title: 'Users OverView',
      stats: [
        { label: 'Total', value: '1.8k' },
        { label: 'Riders', value: 80 },
        { label: 'Subscribers', value: '1k' },
      ],
    },
  ];

  return (
    <Box w={{base:'100%', md:"35%"}} mb="auto">
      <Stack gap={9}>
        {cardsData.map((card) => (
          <OverviewCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            stats={card.stats}
          />
        ))}
      </Stack>
    </Box>
  );
};