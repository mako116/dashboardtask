"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

const BaseModal = ({ isOpen, onClose, children, maxWidth = "max-w-lg" }: BaseModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
     
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
   
      <Box
      width={{ base: "80%", md:"90%" }}
     
        className={`relative bg-white rounded-2xl shadow-2xl  ${maxWidth} animate-fadeInScale overflow-hidden`}
      >
        {children}
      </Box>
    </div>
  );
};

export default BaseModal;
