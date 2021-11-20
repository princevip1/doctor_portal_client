import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { textAlign } from "@mui/system";

const bannerBg = {
  background: `url(${bg})`,
};

const varticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            style={{ ...varticalCenter, textAlign: "left" }}
          >
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Start Here
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 13, my: 3, fontWeight: 300, color: "gray" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                voluptas magni dolorum harum suscipit sapiente quisquam debitis
                dolorem repellendus a.
              </Typography>
              <Button
                sx={{ my: 5, backgroundColor: "#5CE7ED" }}
                variant="contained"
              >
                Get Appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={varticalCenter}>
            <img style={{ width: "400px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
