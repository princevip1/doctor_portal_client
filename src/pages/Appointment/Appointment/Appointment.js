import React from "react";
import Nevigation from "../../Shered/Nevigation/Nevigation";
import AppointmentHeader from "../AppoinrmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Nevigation />
      <AppointmentHeader date={date} setDate={setDate} />
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
