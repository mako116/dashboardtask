import { Input, Tabs, Flex, useBreakpointValue, Box } from "@chakra-ui/react";
import { BiBriefcase } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";
import { LuScrollText } from "react-icons/lu";
import { PiArticle } from "react-icons/pi";
import { InputGroup } from "../Input/InputGroup";
import { Search } from "@/public/assets/Search";

const SubNav = () => {
  const iconSize = useBreakpointValue({ base: 12, sm: 14, md: 18 });

  const tabs = [
    { value: "members", label: "Dashboard", icon: <GoHomeFill size={iconSize} />, enabled: true },
    { value: "Budgeting", label: "Budget", icon: <BiBriefcase size={iconSize} />, enabled: false },
    { value: "calendar", label: "Calendar", icon: <HiOutlineUser size={iconSize} />, enabled: false },
    { value: "request", label: "Request", icon: <PiArticle size={iconSize} />, enabled: false },
    { value: "applications", label: "Applications", icon: <LuScrollText size={iconSize} />, enabled: false },
  ];

  const SearchBox = (
    <InputGroup
      startElement={<Search className="w-3 md:w-6 h-2 md:h-6 text-gray-700" />}
      startElementProps={{ color: "#E4E4E4", fontSize: { base: "8px", md: "xl" } }}
      w={{ base: "150px", sm: "200px", lg: "300px" }}
      h={{ base: "23px", md: "40px" }}
      bg="#F5F5F5"
      borderRadius="10px"
      pr={{ base: "1", md: "3" }}
   
      border="1px solid #E4E4E4"
      _focus={{ boxShadow: "none", outline: "none" }}
      py={{ base: "0", md: "1" }}
      _focusWithin={{
        boxShadow: "0 0 0 2px #3182ce",
        bg: "white",
      }}
    >
      <Input
        ml={2}
        placeholder="Search listings, users here..."
        fontSize={{ base: "8px", md: "14px" }}
        border="none"
        outline="none"
        _placeholder={{ color: "#919191" }}
        _focus={{ border: "none", outline: "none", boxShadow: "none" }}
        bg="transparent"
      />
    </InputGroup>
  );

  return (
    <Tabs.List
      bg="#FFF"
      border="none"
      pt={{ base: "0", md: "4" }}
      px={{ base: "0", md: "3" }}
      pb={{ base: "0", md: "2" }}
      w="100%"
      display="flex"
      gap="2"
      fontSize={{ base: "9px", md: "14px" }}
      alignItems="center"
    >
      <Box
        flex="1"
        overflowX={{ base: "auto", md: "visible" }}
        whiteSpace="nowrap"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <Flex w="max-content" gap="2" align="center">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              transition="all 0.25s ease-in-out"
              fontFamily="YourCustomFont, sans-serif"
              disabled={!tab.enabled}
              _selected={{
                bg: "#F5F5F5",
                color: "#191919",
                fontWeight: "600",
                px: "3",
                py: "2",
                transform: "scale(1.05)",
              }}
              _disabled={{
                cursor: "not-allowed",
                pointerEvents: "none",
              }}
              color="gray.500"
              fontSize={{ base: "8px", md: "14px" }}
              px={{ base: "2", md: "4" }}
              py={{ base: "1", md: "2" }}
              borderRadius="md"
              display="inline-flex"
              alignItems="center"
              gap="2"
              minW={{ base: "auto", md: "120px" }}
              justifyContent="center"
            >
              {tab.icon}
              {tab.label}
            </Tabs.Trigger>
          ))}

          {/* Mobile: search inside scroll */}
          <Box display={{ base: "block", md: "none" }}>{SearchBox}</Box>
        </Flex>
      </Box>

      {/* Desktop: search fixed right */}
      <Box display={{ base: "none", md: "block" }}>{SearchBox}</Box>
    </Tabs.List>
  );
};

export default SubNav;
