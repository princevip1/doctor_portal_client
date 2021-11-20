import { Grid } from "@mui/material";
import * as React from "react";
import Appointments from "../../Dashboard/Appointments/Appointments";
import Calander from "../../Shered/Calander/Calander";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} sm={5}>
        <Calander date={date} setDate={setDate} />
      </Grid>
      <Grid item xs={12} md={6} sm={7}>
        <Appointments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
