import { Input, Tabs, Flex } from "@chakra-ui/react";
import { BiBriefcase } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";
import { LuScrollText } from "react-icons/lu";
import { PiArticle } from "react-icons/pi";
import { InputGroup } from "../Input/InputGroup";
import { Search } from "@/public/assets/Search";

const SubNav = () => {
  const tabs = [
    { value: "members", label: "Dashboard", icon: <GoHomeFill size={18} />, enabled: true },
    { value: "Budgeting", label: "Budget", icon: <BiBriefcase size={18} />, enabled: false },
    { value: "calendar", label: "Calendar", icon: <HiOutlineUser size={18} />, enabled: false },
    { value: "request", label: "Request", icon: <PiArticle size={18} />, enabled: false },
    { value: "applications", label: "Applications", icon: <LuScrollText size={18} />, enabled: false },
  ];

  return (
    <Tabs.List
      bg="#FFF"
      border="none"
      pt={{ base: "0", md: "4" }}
      px={{ base: "0", md: "3" }}
      pb={{ base: "0", md: "2" }}
      w="100%"
      justifyContent="space-between"
      d="flex"
      gap="2"
      fontSize={{ base: "11px", md: "14px" }}
      alignItems="center"
    >
      <Flex flex={1} flexWrap="wrap" justifyContent="space-between">
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
              px: "6",
              py: "3",
              transform: "scale(1.05)",
            }}
            _disabled={{
              opacity: 0.5,
              cursor: "not-allowed",
              pointerEvents: "none",  
            }}
            color="gray.500"
            fontSize={{ base: "11px", md: "14px" }}
            px={{ base: "2", md: "4" }}
            py={{ base: "1", md: "2" }}
            borderRadius="md"
            display="flex"
            alignItems="center"
            gap="2"
            minW={{ base: "auto", md: "120px" }}
            justifyContent="center"
          >
            {tab.icon}
            {tab.label}
          </Tabs.Trigger>
        ))}

        
        <InputGroup
          startElement={<Search className="w-6 h-6 text-gray-700" />}
          startElementProps={{ color: "#E4E4E4", fontSize: "xl" }}
          w={{ base: "100%", lg: "300px" }}
          bg="#F5F5F5"
          borderRadius="10px"
          pr={3}
          mt={{ base: "4", lg: "0" }}
          border="1px solid #E4E4E4"
          _focus={{ boxShadow: "none", outline: "none" }}
          py={1}
          _focusWithin={{
            boxShadow: "0 0 0 2px #3182ce",
            bg: "white",
          }}
        >
          <Input
            ml={2}
            placeholder="Search listings, users here..."
            fontSize="14"
            border="none"
            outline="none"
            _placeholderShown={{ color: "#919191" }}
            _focus={{ border: "none", outline: "none", boxShadow: "none" }}
            _focusVisible={{ border: "none", outline: "none", boxShadow: "none" }}
            _active={{ border: "none", outline: "none", boxShadow: "none" }}
            bg="transparent"
          />
        </InputGroup>
      </Flex>
    </Tabs.List>
  );
};

export default SubNav;
