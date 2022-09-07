import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
interface ITabPanelProps {
  children?: ReactNode;
  value: number;
  index: number;
}
export const TabPanel = ({
  children,
  value,
  index,
  ...other
}: ITabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};
