import React, { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setbookingDone,
}) => {
  const { name, time } = booking;
  const { user } = useAuth();
  const initialInfo = {
    pathintName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState({ initialInfo });

  const handleOnblur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const appointInfo = {
      ...bookingInfo,
      time,
      serviceNamee: name,
      date: date.toLocaleDateString(),
    };
    fetch(`http://localhost:5000/appointments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setbookingDone(true);
          console.log(data);
          handleBookingClose();
        }
      });
  };
  return (
    <Modal
      open={openBooking}
      onClose={handleBookingClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Booking {name}
        </Typography>
        <form onSubmit={handleBookingSubmit}>
          <TextField
            label="Time"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={time}
            size="small"
            disabled
          />
          <TextField
            label="Name"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="pathintName"
            defaultValue={user.displayName}
            onBlur={handleOnblur}
            size="small"
          />
          <TextField
            label="Email"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={user.email}
            onBlur={handleOnblur}
            name="email"
            size="small"
          />
          <TextField
            label="Phone"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            placeholder="Your Phone"
            size="small"
            onBlur={handleOnblur}
            name="phone"
          />
          <TextField
            disabled
            label="Phone"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
