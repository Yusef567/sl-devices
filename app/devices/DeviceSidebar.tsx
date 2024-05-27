"use client";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MapIcon from "@mui/icons-material/Map";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import SupportIcon from "@mui/icons-material/Support";

const DeviceSidebar = () => {
  return (
    <Grid
      item
      xs={3}
      container
      direction="column"
      justifyContent="space-between"
      sx={{ height: "100%" }}
    >
      <Paper
        sx={{
          backgroundColor: (theme) => theme.palette.gray?.light,
          boxShadow: "none",
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <FormatListBulletedIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="Device List" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <MapIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="Device Map" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AutoModeIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="Device Profiles" />
          </ListItem>
        </List>
      </Paper>

      <Paper
        sx={{
          backgroundColor: (theme) => theme.palette.gray?.light,
          boxShadow: "none",
        }}
      >
        <List>
          <ListItem>
            <img src="/logo.svg" alt="logo" />
            <ListItemText sx={{ ml: 2 }} primary="System Loco" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SupportIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary="Get Help" />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};

export default DeviceSidebar;
