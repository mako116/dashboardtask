"use client";

import { StrictMode } from "react";
 import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
 

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
        <ChakraProvider value={defaultSystem}>
        {children}
      </ChakraProvider>
    </StrictMode>
  );
}

export default Providers;
