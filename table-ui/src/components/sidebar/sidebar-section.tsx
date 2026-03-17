// sidebar-section.tsx
import { Stack, Typography } from "@mui/material";

export interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <Stack spacing={"4px"}> {/* Matches the gap logic from previous specs */}
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "20px",
          color: "#324054", // Primary Gray from Figma
          letterSpacing: "0%",
          width: "136px", // Specified fixed width
          height: "38px", // Specified fixed height
        }}
      >
        {title}
      </Typography>
      <Stack spacing={1}>
        {children}
      </Stack>
    </Stack>
  );
}