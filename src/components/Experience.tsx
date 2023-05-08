import { Box, Typography } from "@mui/material";
import React from "react";
import Timeline from '@mui/lab/Timeline';
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceInfoList } from "../data/ExperienceInfo";
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import develop1 from "../assets/imgs/develop-2.png"
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
      width="100%"
      bgcolor="#252934"
      display="flex"
      // flexDirection="column"
      sx={{
        alignItems:{xs:"start", sm:"center"}
      }}
    >
      <Box sx={{mt:4, width:{xs:"100%", lg:"55%"}, display:{xs:"initial", sm:"flex"}, flexDirection:"column", alignItems:{xs:"initial", sm:"center"}}}>
        <Typography variant="h3" color="#e31b6d"fontFamily="Raleway" sx={{ textAlign:{xs:"center", sm:"initial"}, display:"block",letterSpacing:"0.1rem"}}>
          Experience
        </Typography>
        <Timeline sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}>
          {
            ExperienceInfoList.map((item) => {
              return(
                <ExperienceItem experience={item}/>
              )
            })
          }
        </Timeline>
      </Box>
      <Box sx={{mt:4, width:{xs:"100%", sm:"45%"}, display:{xs:"none", lg:"flex"}, flexDirection:{sm:"column"}}}>
        <Box sx={{width:"70%", height:"50%"}}>
        <img src={develop1} alt="..." style={{objectFit:"cover", height:"100%", width:"100%"}}/>
        </Box>
        {/* <img src={} alt="..."/> */}
      </Box>
    </Box>
  );
};
