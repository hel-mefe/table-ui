import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Chip,
  Divider,
  TextField,
  Stack,
} from "@mui/material"
import { ModalActionButton } from "../../ui/button"
import CloseIcon from "@mui/icons-material/Close"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"

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
      maxWidth={false}
      PaperProps={{
        sx: {
          width: '502px',
          height: '670px',
          borderRadius: 3,
          p: 0,
          overflow: 'hidden',
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
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '12px'}}>
          <Stack>
            <Typography variant="h6" fontWeight={700} mb={0.5}>
              CleanPro Solutions
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <MailOutlineIcon fontSize="small" />
              <Typography variant="body2" color="#AEAEAE">
                {provider.email}
              </Typography>
            </Box>
        </Stack>

        <Stack direction="row" spacing={1} mb={2}>
          <Chip label="Customer" size="small" sx={{ borderRadius: 999 }} />
          <Chip label={provider.status ?? "invited"} size="small" sx={{ borderRadius: 999 }} />
        </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Contact information */}
        <Typography fontWeight={600} mb={1}>
          Contact Information
        </Typography>

        <Stack direction="row" spacing={3} mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <MailOutlineIcon fontSize="small" />
            <Typography variant="body2" color="#AEAEAE">lisa.anderson@email.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <PhoneIphoneIcon fontSize="small" />
            <Typography variant="body2" color="#AEAEAE">{provider.phoneNumber}</Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={3} mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <PlaceOutlinedIcon fontSize="small" />
            <Typography variant="body2" color="#AEAEAE">United Kingdom</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <CalendarTodayOutlinedIcon fontSize="small" />
            <Typography variant="body2" color="#AEAEAE">Signed up {formattedDate}</Typography>
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
        <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
          {provider.serviceOffering.map((s) => (
            <Chip
              key={s}
              label={s}
              size="small"
              sx={{
                borderRadius: 999,
                backgroundColor: 'transparent',
                color: '#7F7F7F',
                '& .MuiChip-label': { px: 0 },
              }}
            />
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Internal notes */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Box display="flex" alignItems="center" gap={1}>
            <ChatBubbleOutlineIcon fontSize="small" />
            <Typography fontWeight={600}>Internal Notes</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: "default" }}>
            <EditOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography variant="body2">Edit</Typography>
          </Box>
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
        <Stack direction="row" justifyContent="center" gap="62px" mt={3}>
          <ModalActionButton variant="contained" color="primary" onClick={onOnboard}>
            Onboard
          </ModalActionButton>
          <ModalActionButton
            variant="contained"
            color="error"
            onClick={onReject}
            sx={{ '&:hover': { backgroundColor: 'error.dark' } }}
          >
            Reject
          </ModalActionButton>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

