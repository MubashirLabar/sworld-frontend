import AuthLayout from "components/layouts/authLayout";
import React from "react";
import Hero from "./Hero";
import Report from "./Report";

function Analytics(props) {
  return (
    <AuthLayout className="analytics-page">
      <Hero />
      <Report />
    </AuthLayout>
  );
}

export default Analytics;
