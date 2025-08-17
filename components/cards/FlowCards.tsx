import { Card,Text } from "@chakra-ui/react";
import React from "react";

export interface FlowCardProps {
  amount: string;
  title: string;
  percentage: string;
  color: string;
  Icon?: React.ElementType;
}

export const FlowCard: React.FC<FlowCardProps> = ({ amount, title, percentage, color, Icon }) => {
  return (
    <Card.Root size="sm" rounded={{ base: 10, md: 12 }}>
      <Card.Header fontFamily="CustomBoldFont, sans-serif" color={color}>
        {amount}
      </Card.Header>
      <Card.Body
        mt={-2}
        flexDirection="row"
        gap={2}
        fontSize={10}
        fontFamily="CustomMediumFonts, sans-serif"
        color="#3D3D3D"
        alignItems="center"
      >
        <Text>{title}</Text>
        {Icon && <Icon />}
        <Text fontFamily="CustomregularFont, sans-serif" color={color}>
          {percentage}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};


