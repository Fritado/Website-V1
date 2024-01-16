import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import FooterOne from "../components/commonComp/FooterOne";
import NavBar from "../components/commonComp/NavBar";
import PricingAreaOne from "../components/FeaturesComp/PricingAreaOne";
import ServiceAreaGroup from "../components/FeaturesComp/ServiceAreaGroup";

const Features= () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Features"} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Features;
