import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import FooterOne from "../components/commonComp/FooterOne";
import NavBar from "../components/commonComp/NavBar";

const Benefits = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Benefits"} />

      
      <div className="pd-top-120 pd-bottom-120"></div>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Benefits;
