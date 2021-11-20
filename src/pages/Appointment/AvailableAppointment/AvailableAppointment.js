import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";
import { Alert } from "@mui/material";

const bookings = [
  {
    id: 1,
    name: "murikha",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
  {
    id: 2,
    name: "sala chu**r vai",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
  {
    id: 3,
    name: "Oral Surgury",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
  {
    id: 4,
    name: "market a ja",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
  {
    id: 5,
    name: "bral mar",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgury",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
  {
    id: 7,
    name: "Oral Surgury",
    time: "07.00 PM - 08.00 PM",
    Space: 10,
  },
];

const AvailableAppointment = ({ date }) => {
  console.log(date.toDateString());
  const [bookingDone, setbookingDone] = useState(false);
  return (
    <Container>
      <h1>Available Appointment: {date.toDateString()}</h1>
      {bookingDone && <Alert severity="success">Appointment Book done</Alert>}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setbookingDone={setbookingDone}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
