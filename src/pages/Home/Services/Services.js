import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whiting from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ",
    img: cavity,
  },
  {
    name: "Teeth whiting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ",
    img: whiting,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, color: "success.main", m: 5 }}
          variant="h6"
          component="div"
        >
          Our Service
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h3" component="div">
          Services We Provided
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
