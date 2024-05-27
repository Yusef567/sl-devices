import { Device, DeviceLocation } from "@/app/interfaces/Device";
import { formatDate, formatRelativeTime } from "@/app/utils/dateUtils";
import { Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

const DeviceOverview = ({
  deviceDetails,
  lastKnownLocation,
}: {
  deviceDetails: Partial<Device>;
  lastKnownLocation: Partial<DeviceLocation>;
}) => {
  const renderStatusMessage = () => {
    return (
      <Box>
        {deviceDetails.statusIndicators?.moving && (
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Device is moving
          </Typography>
        )}
        {deviceDetails.statusIndicators?.gpsFailure && (
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            GPS Failure
          </Typography>
        )}
        {deviceDetails.statusIndicators?.lowSignal && (
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Low Signal
          </Typography>
        )}
        {deviceDetails.statusIndicators?.charging && (
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Device is charging
          </Typography>
        )}
        {deviceDetails.statusIndicators?.externalPower && (
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            External Power is connected
          </Typography>
        )}
        {deviceDetails.statusIndicators?.flightMode && (
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Device is in Flight Mode
          </Typography>
        )}
        {deviceDetails.statusIndicators?.pendingSettings && (
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Settings are pending
          </Typography>
        )}
      </Box>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="h5">Summary</Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Device ID
          </Typography>

          <Typography variant="body1">{deviceDetails.id}</Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Device Name
          </Typography>

          <Typography variant="body1">{deviceDetails.name ?? "N/A"}</Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Model
          </Typography>

          <Typography variant="body1">{deviceDetails.model?.name}</Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Owner
          </Typography>

          <Typography variant="body1">{deviceDetails.owner?.name}</Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Firmware
          </Typography>

          <Typography variant="body1">
            {deviceDetails.firmware?.current}
          </Typography>

          <Typography variant="body2" sx={{ color: "gray.main" }}>
            {deviceDetails.firmware?.pending === null
              ? "No pending firmware"
              : "Pending firmware update"}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="h5">Status</Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Battery Level
          </Typography>

          <Typography variant="body1">
            {deviceDetails.statusIndicators?.battery}
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Status Messages
          </Typography>

          <Typography variant="body1">{renderStatusMessage()}</Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Last Report
          </Typography>

          <Typography variant="body1">
            {deviceDetails?.lastReportTime
              ? formatRelativeTime(deviceDetails.lastReportTime)
              : "N/A"}
          </Typography>

          <Typography variant="body2" sx={{ color: "gray.main" }}>
            {deviceDetails?.lastReportTime
              ? formatDate(deviceDetails.lastReportTime)
              : "N/A"}
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Next Report Due
          </Typography>

          <Typography variant="body1">
            {deviceDetails?.nextReportTime
              ? formatRelativeTime(deviceDetails.nextReportTime)
              : "N/A"}
          </Typography>

          <Typography variant="body2" sx={{ color: "gray.main" }}>
            {deviceDetails?.nextReportTime
              ? formatDate(deviceDetails.nextReportTime)
              : "N/A"}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="h5">Position</Typography>

        <MapWithNoSSR lastKnownLocation={lastKnownLocation} />

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Time
          </Typography>

          <Typography variant="body1">
            {deviceDetails.lastKnownLocation?.time
              ? formatRelativeTime(deviceDetails.lastKnownLocation?.time)
              : "N/A"}
          </Typography>

          <Typography variant="body2" sx={{ color: "gray.main" }}>
            {deviceDetails.lastKnownLocation?.time
              ? formatDate(deviceDetails.lastKnownLocation?.time)
              : "N/A"}
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Latitude/Longitude
          </Typography>

          <Typography variant="body1">
            {`${deviceDetails.lastKnownLocation?.global.lat}, ${deviceDetails.lastKnownLocation?.global.lon}`}
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "gray.main", mb: 1 }}>
            Address
          </Typography>

          <Typography variant="body1">
            {deviceDetails.lastKnownLocation?.summary}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DeviceOverview;
