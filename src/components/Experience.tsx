import { Box, Divider, Typography, Tabs, Tab } from "@mui/material";
import React from "react";
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceInfoList } from "../data/ExperienceInfo";
import { TabPanel } from "./TabPanel";

const allProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const Experience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      id="#section-experience"
      m={0}
      minHeight="100vh"
      minWidth="100vw"
      bgcolor="#252934"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">
        <Typography p={4} fontFamily="Raleway" variant="h3" color="#FFFFFF">
          Experience
        </Typography>
        <Divider
          variant="middle"
          color="#e31b6d"
          sx={{ height: "0.25vh", width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
        >
          <Tab sx={{ color: "white " }} label="Encode" {...allProps(0)} />
          <Tab sx={{ color: "white " }} label="Freelance" {...allProps(1)} />
        </Tabs>
      </Box>
      <Box>
        {ExperienceInfoList.map((e, ind) => {
          return (
            <TabPanel value={value} index={ind}>
              <ExperienceItem {...e} key={ind} />
            </TabPanel>
          );
        })}
      </Box>
    </Box>
  );
};
