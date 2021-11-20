import React from "react";
import Nevigation from "../../Shered/Nevigation/Nevigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Nevigation />
      <Banner />
      <Services />
      <AppointmentBanner />
    </div>
  );
};

export default Home;
