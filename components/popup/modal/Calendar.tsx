"use client";

import dynamic from "next/dynamic";
import { format } from "date-fns";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import BaseModal from "../modal";
import { Box, Button, Text } from "@chakra-ui/react";

const CalendarComponent = dynamic(() => import("react-calendar"), { ssr: false });

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal = ({ isOpen, onClose }: CalendarModalProps) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      {/* Header */}
      <Box p={2}  className="flex items-center justify-between border-b border-gray-800 bg-black px-6  ">
        <div className="flex items-center gap-2">
          <Button
          color={'#fff'}
          bg={'transparent'}
            onClick={onClose} >
            <FaArrowLeft  />
          </Button>
          <Text fontFamily="CustomMediumFonts, sans-serif" 
          color="#fff"
          fontWeight="bold"
          fontSize={{ base: "1rem", md: "1.2rem" }}
           >
            Calendar
            </Text>
        </div>
        <Button
        color={'#fff'}
          onClick={onClose}
          bg={'transparent'}
        >
          <FaTimes  />
        </Button>
      </Box>

      {/* Body */}
      <div className="p-6 pb-8 flex justify-center bg-black">
        <CalendarComponent
          className="custom-calendar rounded-xl border border-gray-800 shadow-lg p-4 w-full max-w-md bg-black text-white"
          prev2Label={null}
          next2Label={null}
          formatDay={(locale, date) => format(date, "d")}
          formatShortWeekday={(locale, date) => format(date, "EEEEE")}
          formatMonthYear={(locale, date) => format(date, "MMMM yyyy")}
        />
      </div>

      {/* Calendar Styling */}
      <style jsx global>{`
        /* Navigation */
        .custom-calendar .react-calendar__navigation {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .custom-calendar .react-calendar__navigation button {
          min-width: 2rem;
          background: transparent;
          font-size: 22px;
          color: #d1d5db; /* Tailwind gray-300 */
          transition: color 0.2s;
        }
        .custom-calendar .react-calendar__navigation button:hover {
          color: #fff;
        }
        .custom-calendar .react-calendar__navigation__label {
          flex-grow: 1;
          text-align: center;
          font-weight: 600;
          font-size: 10px;
          color: #f9fafb; /* Tailwind gray-50 */
        }

        /* Weekdays */
        .custom-calendar .react-calendar__month-view__weekdays {
          text-align: center;
          font-size: 10px;
          color: #9ca3af; /* Tailwind gray-400 */
          font-weight: 500;
        }

        /* Day Tiles */
        .custom-calendar .react-calendar__tile {
          height: 3.7rem; /* Taller tiles */
          width: 2rem; /* Square shape */
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.25rem;
      
          font-size: 10px;
          transition: background 0.2s, transform 0.2s;
          color: #f3f4f6; /* Tailwind gray-100 */
          border:1px solid #212121;
        }
        .custom-calendar .react-calendar__tile:hover {
          background: #0D0D0D; /* Tailwind gray-800 */
          transform: scale(1.05);
        }

        /* Today */
        .custom-calendar .react-calendar__tile--now {
          color: #3b82f6;
          font-weight: 600;
          margin-bottom:auto;
        }

        /* Selected */
        .custom-calendar .react-calendar__tile--active {
          background: transparent;
          color: #fff;
          font-weight: 700;
        }
        .custom-calendar .react-calendar__tile--active abbr {
          background: #2525E6; /* Tailwind blue-600 */
          color: white;
          border-radius: 40%;
          display: inline-block;
          width: 2.5rem;
          height:1.9rem;
          line-height: 2rem;
          text-align: center;
          font-weight: bold;
          margin-bottom:auto;
        }

        /* Abbr tag fix (date numbers) */
        .custom-calendar abbr {
          text-decoration: none;
        }
      `}</style>
    </BaseModal>
  );
};

export default CalendarModal;
