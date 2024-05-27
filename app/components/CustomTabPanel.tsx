import { Box, Typography } from "@mui/material";
import { TabPanelProps } from "../interfaces/TabPanelProps";

export const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"} variant={"body2"}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
};
