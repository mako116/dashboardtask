"use client";
import { Box, Tabs } from "@chakra-ui/react";
import { Navbar } from "../UI/Headers/Navbar";
import SubNav from "../UI/Headers/SubNav";
import { Dashboard } from "@/Features/Dashboard";

export const Layout = () => {
  return (
    <Box minH="100vh" bg="#FBFCFC">
      <Navbar />
      <Tabs.Root defaultValue="members" variant="plain" w="100%">
       
        <Box px={3}   bg="white" borderBottom="1px solid #E2E8F0">
          <SubNav />
        </Box>
         
        <Box px={6} py={0}>
          <Tabs.Content value="members">
           <Dashboard />
          </Tabs.Content>
          <Tabs.Content value="projects">
            <div>Manage your projects</div>
          </Tabs.Content>
          <Tabs.Content value="users">
            <div>Manage your users</div>
          </Tabs.Content>
          <Tabs.Content value="request">
            <div>Manage your requests</div>
          </Tabs.Content>
          <Tabs.Content value="applications">
            <div>Manage your applications</div>
          </Tabs.Content>

        </Box>
      </Tabs.Root>
    </Box>
  );
};
