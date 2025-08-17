"use client";

import { Tabs } from "@chakra-ui/react";

interface TabOption {
  value: string;
  label: string;
}

interface CustomTabsProps {
  defaultValue?: string;
  options: TabOption[];
}

const CustomTabs = ({ defaultValue, options }: CustomTabsProps) => {
  return (
    <Tabs.Root  defaultValue={defaultValue ?? options[0]?.value} variant="plain">
      <Tabs.List
        bg="#FFFFFF"
        p="1"
        display="flex"
        justifyContent={{base: "flex-start", md: "end"}}
        gap="2"
       >
        {options.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            _selected={{
              bg: "#F5F5F5",
              color: "black",
              fontWeight: "semibold",
            }}
            _hover={{ bg: "#F5F5F5" }}
            rounded="md"
            px="4"
            py="2"
            fontSize={{ base: "10px", md: "14px" }}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default CustomTabs;
