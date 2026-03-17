import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Chip,
  Divider,
  TextField,
  Button,
  Stack,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"

import type { ServiceProvider } from "../../../features/service-providers/service-provider.types"

export interface UserDetailsModalProps {
  open: boolean
  provider: ServiceProvider | null
  onClose: () => void
  onOnboard: () => void
  onReject: () => void
}

export function UserDetailsModal({
  open,
  provider,
  onClose,
  onOnboard,
  onReject,
}: UserDetailsModalProps) {
  if (!provider) return null

  const formattedDate = new Date(provider.signupDate).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  })

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 0,
        },
      }}
    >
      <DialogContent sx={{ p: 3 }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <PersonOutlineIcon fontSize="small" />
            <Typography fontWeight={600}>User Details</Typography>
          </Box>

          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Company / name */}
        <Typography variant="h6" fontWeight={700} mb={0.5}>
          CleanPro Solutions
        </Typography>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <MailOutlineIcon fontSize="small" />
          <Typography variant="body2" color="text.secondary">
            {provider.email}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} mb={2}>
          <Chip label="Customer" size="small" sx={{ borderRadius: 999 }} />
          <Chip label={provider.status ?? "invited"} size="small" sx={{ borderRadius: 999 }} />
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Contact information */}
        <Typography fontWeight={600} mb={1}>
          Contact Information
        </Typography>

        <Stack direction="row" spacing={3} mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <MailOutlineIcon fontSize="small" />
            <Typography variant="body2">lisa.anderson@email.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <PhoneIphoneIcon fontSize="small" />
            <Typography variant="body2">{provider.phoneNumber}</Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={3} mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <PlaceOutlinedIcon fontSize="small" />
            <Typography variant="body2">United Kingdom</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <CalendarTodayOutlinedIcon fontSize="small" />
            <Typography variant="body2">Signed up {formattedDate}</Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Customer details */}
        <Typography fontWeight={600} mb={1}>
          Customer Details
        </Typography>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <PersonOutlineIcon fontSize="small" />
          <Typography variant="body2">individual</Typography>
        </Box>

        <Typography fontWeight={600} mb={0.5}>
          User Details
        </Typography>
        <Stack direction="row" spacing={2} mb={2}>
          <Typography variant="body2">{provider.serviceOffering}</Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Internal notes */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Box display="flex" alignItems="center" gap={1}>
            <ChatBubbleOutlineIcon fontSize="small" />
            <Typography fontWeight={600}>Internal Notes</Typography>
          </Box>
          <Typography variant="body2" sx={{ cursor: "default" }}>
            Edit
          </Typography>
        </Box>

        <TextField
          multiline
          minRows={3}
          placeholder="No Note Added yet"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#F4F4F4",
            },
          }}
        />

        {/* Actions */}
        <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={onOnboard}
            sx={{ px: 5, borderRadius: 999 }}
          >
            Onboard
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={onReject}
            sx={{ px: 5, borderRadius: 999 }}
          >
            Reject
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

