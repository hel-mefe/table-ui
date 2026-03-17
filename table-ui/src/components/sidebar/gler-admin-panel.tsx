import { Box, Typography, Stack } from "@mui/material";
import gler from '../../../public/gler.png';
import star from '../../../public/star.svg';

export const GlerAdminPanel = () => (
  <Stack direction="row" alignItems="end" gap={"2px"} sx={{ mb: 4 }}>
    <Box component="img" src={gler} alt="Logo" borderRadius={"8px"} width={"43.76px"} height={"36px"} />
    <Box sx={{ position: 'relative', height: '38.12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Box component="img" sx={{ position: 'absolute' }} src={star} alt="" top={"8px"} left={"5px"} width={"5px"} height={"5px"} />
      <Box component="img" sx={{ position: 'absolute' }} src={star} alt="" top={"13px"} left={"12px"} width={"3px"} height={"3px"} />
      <Box component="img" sx={{ position: 'absolute' }} src={star} alt="" top={"-1px"} left={"10px"} width={"8px"} height={"8px"} />
      <Typography sx={{ color: "#1A78F2", marginLeft: "14px", fontSize: "16px", fontWeight: 500, lineHeight: "19px", letterSpacing: "0.3%", fontFamily: "'Poppins', sans-serif" }}>
        Admin Panel
      </Typography>
    </Box>
  </Stack>
);
