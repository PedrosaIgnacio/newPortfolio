import React from "react";
import { IProject } from "../data/ProjectInfo";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Box,
} from "@mui/material";

export const ProjectCard = ({
  title,
  description,
  deploy,
  repository,
  img,
  id,
}: IProject) => {
  return (
    <Box data-aos="fade-right">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            fontFamily="Raleway"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            fontFamily="Raleway"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
        <Box display="flex" justifyContent="center" alignItems="center">
          <CardActions>
            <Link href={deploy} underline="none">
              <Button size="small">Deploy</Button>
            </Link>
            <Link href={repository} underline="none">
              <Button type="button" size="small">
                Repository
              </Button>
            </Link>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};
