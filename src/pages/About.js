import React from "react";
import AboutAreaOne from "../components/AboutComp/AboutAreaOne";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import ContactAreaOne from "../components/AboutComp/ContactAreaOne";
import CounterAreaOne from "../components/AboutComp/CounterAreaOne";
import FaqAreaOne from "../components/AboutComp/FaqAreaOne";
import FooterOne from "../components/commonComp/FooterOne";
import NavBar from "../components/commonComp/NavBar";
import TeamAreaOne from "../components/AboutComp/TeamAreaOne";
import WorkProcessOne from "../components/AboutComp/WorkProcessOne";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
