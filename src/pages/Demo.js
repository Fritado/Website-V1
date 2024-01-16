import React from "react";
import NavBar from "../components/commonComp/NavBar";
import FooterOne from "../components/commonComp/FooterOne";
import Breadcrumb from "../components/commonComp/Breadcrumb";

const Demo = () => {
  return (
    <>
      <NavBar />

      <Breadcrumb title={"Demo"} />

      <div className="pd-top-120 pd-bottom-120"></div>

      <FooterOne />
    </>
  );
};

export default Demo;
