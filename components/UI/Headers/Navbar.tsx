"use client";

import { Flex, Image } from "@chakra-ui/react";
import logo from "../../../public/assets/Myxellia logo.png";
import IconButtonUI from "../IconButton/IconButton";
import { Profile } from "@/public/assets/Profile";
import { Notification } from "@/public/assets/Notification";
import { Budgeting } from "@/public/assets/Budgeting";
import { Calendar } from "@/public/assets/Calendar";
import { Chat } from "@/public/assets/chat";
import { useState } from "react";
import BudgetingModal from "@/components/popup/modal/Budget";
import CalendarModal from "@/components/popup/modal/Calendar";
 
export const Navbar = () => {
  const [isBudgetingOpen, setIsBudgetingOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <>
      <Flex bg={"#000"} justify="space-between" align="center" px={6} py={2}>
        <Image
          src={logo.src}
          width={{base: 70, md:100}}
          height={50}
          borderRadius="full"
          fit="contain"
          alt="myxellia"
        />
        <Flex gap={4}>
          <IconButtonUI
            component={<Notification />}
            aria-label="Notification"
            onClick={() => console.log("Clicked")}
          />
          <IconButtonUI
            component={<Budgeting />}
            aria-label="Budgeting"
            onClick={() => setIsBudgetingOpen(true)}
          />
          <IconButtonUI
            component={<Calendar />}
            aria-label="Calendar"
            onClick={() => setIsCalendarOpen(true)}
          />
          <IconButtonUI
            component={<Chat />}
            aria-label="Chat"
            onClick={() => console.log("Clicked")}
          />
          <IconButtonUI
            component={<Profile />}
            aria-label="Profile"
            onClick={() => console.log("Clicked")}
          />
        </Flex>
      </Flex>

      {/* Modals */}
      <BudgetingModal isOpen={isBudgetingOpen} onClose={() => setIsBudgetingOpen(false)} />
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </>
  );
};
