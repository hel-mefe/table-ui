import { styled, FormControlLabel, Checkbox, type CheckboxProps } from "@mui/material"

export const SidebarCheckboxLabel = styled(FormControlLabel)({
  margin: 0,
  "& .MuiTypography-root": {
    fontSize: 14,
  },
})

// 1. Define the base "box" look (Unchecked)
const BpIcon = styled("span")(() => ({
  borderRadius: 6,
  width: 22,
  height: 22,
  border: "1px solid #000000",
  backgroundColor: "#FFFFFF",
  boxSizing: "border-box",
  display: "block",
  "input:hover ~ &": {
    backgroundColor: "#E8F1FD", // subtle blue hover, not white
  },
}))

// 2. Define the "Checked" look
const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#1A78F2",
  borderColor: "#1A78F2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // Override base hover so checked stays solid blue
  "input:hover ~ &": {
    backgroundColor: "#1A78F2",
  },
  "&::before": {
    display: "block",
    width: 14,
    height: 14,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
})

// 3. The Final Component
export const AppCheckbox = (props: CheckboxProps) => {
  return (
    <Checkbox
      disableRipple
      color="default"
      icon={<BpIcon />}
      checkedIcon={<BpCheckedIcon />}
      sx={{
        padding: 0,
        "&:hover": { bgcolor: "transparent" },
      }}
      {...props}
    />
  )
}
