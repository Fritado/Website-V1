import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import ContactMain from "../components/ContactComp/ContactMain";
import FooterOne from "../components/commonComp/FooterOne";
import NavBar from "../components/commonComp/NavBar";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Contact;
