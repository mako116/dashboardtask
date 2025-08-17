"use client";

import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import BaseModal from "../modal";

interface BudgetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const features = [
  {
    icon: "/assets/setting-4.png",
    title: "Set up annual budgets by account category",
    desc: "Allocate funds across income and expense lines with full visibility.",
  },
  {
    icon: "/assets/trend-up.png",
    title: "Track actuals vs budget in real time",
    desc: "See how your community is performing against plan, month by month.",
  },
  {
    icon: "/assets/adjust.png",
    title: "Adjust figures and forecast with ease",
    desc: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
  },
];

const BudgetingModal = ({ isOpen, onClose }: BudgetingModalProps) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      {/* Top Image */}
      <Image
        src={"/assets/media.png"}
        alt="Budgeting"
        className="w-full h-44 object-cover"
      />

      {/* Body */}
      <Box py={5} px={10} gap={5}>
        {features.map((f, idx) => (
          <Flex key={idx} maxW={{ base: "100%", md: 350 }} alignItems="center" gap={4} mb={4}>
            <Image src={f.icon} alt="icon" w={5} h={5}  />
            <Stack>
              <Text
                color="#191919"
                fontWeight="bold"
                fontFamily="CustomBoldFont, sans-serif"
                fontSize={{ base: "14px", md: "16px" }}
              >
                {f.title}
              </Text>
              <Text
                color="#606060"
                fontWeight="normal"
                fontFamily="CustomregularFont, sans-serif"
                fontSize={{ base: "10px", md: "12px" }}
              >
                {f.desc}
              </Text>
            </Stack>
          </Flex>
        ))}
        <Button
          mt={5}
          rounded="xl"
          py={{ base: 4, md: 7 }}
          onClick={onClose}
          className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-95 transition"
        >
          Get Started
        </Button>
      </Box>
    </BaseModal>
  );
};

export default BudgetingModal;
