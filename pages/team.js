import React from "react";
import Head from "next/head";
import {
  CoFounder,
  HeroSection,
  TeamMembers,
} from "../components/Team/components";
import WavesDivider from "../components/Common/WavesDivider";
import DividerLine from "../components/Common/DividerLine";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import { UPLOADS_URL } from "utils/constants";

export default function Team() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="Team"
        description="WholeMark team featuring their roles in the company | eCommerce fulfillment"
        image={""}
      />
      <div>
        <h1>Team Page</h1>
      </div>
    </div>
  );
}
