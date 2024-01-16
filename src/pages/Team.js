import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import FooterOne from "../components/commonComp/FooterOne";
import NavBar from "../components/commonComp/NavBar";
import TeamAreaGroup from "../components/TeamComp/TeamAreaGroup";

const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team"} />

      {/* Team Area Group */}
      <TeamAreaGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Team;
