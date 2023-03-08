// Copyright 2021 akash

import { useRouter } from "next/router";
import SEO from "../components/SEO";
import HomeComponent from "components/Home/components";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="Home"
        description="We are Techonolgy company focused on delivery quality technology products and services."
      />

      <HomeComponent />
    </div>
  );
}
