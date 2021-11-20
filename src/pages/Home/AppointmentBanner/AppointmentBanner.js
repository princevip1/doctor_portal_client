import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import backgroungImg from "../../../images/appointment-bg.png";
import { Button, Container, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${backgroungImg})`,
  marginTop: "175px",
  backgroundBlendMode: "darken , luminosity",
  backgroundColor: "rgba(97, 99, 140, 0.8) ",
};

const AppointmentBanner = () => {
  return (
    <Container style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "400px", marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "start",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ color: "#40E2F0", my: 3 }} variant="h6">
              Appointment
            </Typography>
            <Typography sx={{ color: "white" }} variant="h4">
              Make An Appointment Today
            </Typography>
            <Typography sx={{ color: "white" }} variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              purus leo, consequat at laoreet nec, mollis quis ligula. Donec in
              ullamcorper felis.{" "}
            </Typography>
            <Button
              sx={{ my: 5, backgroundColor: "#5CE7ED" }}
              variant="contained"
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentBanner;
