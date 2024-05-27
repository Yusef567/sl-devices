"use client";

import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { CustomTabPanel } from "@/app/components/CustomTabPanel";
import Grid from "@mui/material/Grid";
import { getDeviceDetails } from "@/app/api/devices";
import { DeviceInfoTab } from "@/app/enums/DeviceInfoTab";
import { Device, DeviceLocation } from "@/app/interfaces/Device";
import { AxiosError } from "axios";
import DeviceOverview from "./DeviceOverview";

function a11yProps(index: number) {
  return {
    id: `device-info-tab-${DeviceInfoTab[index]}`,
    "aria-controls": `device-info-tabpanel-${DeviceInfoTab[index]}`,
  };
}

const DeviceDetails = ({ params }: { params: { id: string } }) => {
  const [tab, setTab] = useState<DeviceInfoTab>(DeviceInfoTab.Overview);
  const [deviceDetails, setDeviceDetails] = useState<Partial<Device>>({});
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastKnownLocation, setLastKnownLocation] = useState<
    Partial<DeviceLocation>
  >({});

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: DeviceInfoTab
  ) => {
    setTab(newValue);
  };

  useEffect(() => {
    setIsLoading(true);

    getDeviceDetails(params.id)
      .then((device) => {
        setDeviceDetails(device);
        setLastKnownLocation(device.lastKnownLocation);

        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [params.id]);

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" sx={{ height: "95vh" }}>
        <Grid container justifyContent="center" xs={12} sx={{ width: "100%" }}>
          <CircularProgress />
        </Grid>
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" alignItems="center" sx={{ height: "95vh" }}>
        <Grid container justifyContent="center" xs={12} sx={{ width: "100%" }}>
          <Typography variant="body1">
            {error.response?.status} Error: An error occurred while loading
            device details, please try again later.
          </Typography>
        </Grid>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          aria-label="device details tabs"
        >
          <Tab label="Device Overview" {...a11yProps(DeviceInfoTab.Overview)} />
          <Tab label="Device History" {...a11yProps(DeviceInfoTab.History)} />
          <Tab label="Device Settings" {...a11yProps(DeviceInfoTab.Settings)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={tab} index={DeviceInfoTab.Overview}>
        <DeviceOverview
          deviceDetails={deviceDetails}
          lastKnownLocation={lastKnownLocation}
        />
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={DeviceInfoTab.History}>
        <Typography variant="h6">Device History</Typography>

        <Typography>Device History Details</Typography>
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={DeviceInfoTab.Settings}>
        <Typography variant="h6">Device Settings</Typography>

        <Typography>Device Settings Information</Typography>
      </CustomTabPanel>
    </Box>
  );
};

export default DeviceDetails;
