import React from "react";
import BlogDetailsArea from "../components/BlogComponents/BlogDetailsArea";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import FooterOne from "../components/commonComp/FooterOne";
import NavBar from "../components/commonComp/NavBar";

const BlogDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog Details"} />

      {/* Blog Details Area */}
      <BlogDetailsArea />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default BlogDetails;
