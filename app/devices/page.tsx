import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeviceSidebar from "./DeviceSidebar";
import DevicesTable from "./DevicesTable";

const DeviceList = () => {
  return (
    <Box sx={{ height: "95vh", p: 2 }}>
      <Grid container spacing={3} sx={{ height: "100%" }}>
        <DeviceSidebar />

        <DevicesTable />
      </Grid>
    </Box>
  );
};

export default DeviceList;
