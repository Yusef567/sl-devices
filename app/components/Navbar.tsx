import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src="/devices.svg" alt="devices" />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Devices
          </Typography>

          <IconButton color="inherit" aria-label="Notifications">
            <NotificationsIcon />
          </IconButton>

          <IconButton color="inherit" aria-label="Apps">
            <AppsIcon />
          </IconButton>

          <IconButton color="inherit" aria-label="Account">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
