import React from "react";
import { Box } from "@mui/material";
import { SidebarSectionContainer, SidebarSectionTitle } from "../ui/sidebar";

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export const SidebarSection = ({ title, children }: SidebarSectionProps) => (
  <SidebarSectionContainer spacing="10px">
    <SidebarSectionTitle>{title}</SidebarSectionTitle>
    <Box>{children}</Box>
  </SidebarSectionContainer>
);
