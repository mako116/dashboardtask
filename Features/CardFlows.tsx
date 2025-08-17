import { FlowCard, FlowCardProps } from "@/components/cards/FlowCards";
import Green from "@/public/assets/green";
import Lightgreen from "@/public/assets/lightgreen";
import Red from "@/public/assets/red";
import { Box, Grid  } from "@chakra-ui/react";

const CardFlows = () => {
  const cardData: FlowCardProps[] = [
    {
      amount: "N120,000,000.00",
      title: "Total Inflow",
      percentage: "2.5%",
      color: "#12B76A",
      Icon: Green,
    },
    {
      amount: "N120,000,000.00",
      title: "MRR",
      percentage: "2.5%",
      color: "#12B76A",
     Icon: Green,
    },
    {
      amount: "N120,000,000.00",
      title: "Commission Revenue",
      percentage: "2.5%",
      color: "#14B8A6",
      Icon: Lightgreen,
    },
    {
      amount: "N120,000,000.00",
      title: "GMV",
      percentage: "2.5%",
      color: "#F04438",
      Icon: Red,
    },
  ];

  return (
    <Box>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={3}>
        {cardData.map((card) => (
          <FlowCard key={card.title} {...card} />
        ))}
      </Grid>
    </Box>
  );
};

export default CardFlows;