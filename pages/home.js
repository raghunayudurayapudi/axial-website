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
        description="eCommerce Fulfillment for D2C Brands | We provide stress-free integration with your current online sales channels and fulfill your orders with the highest accuracy and speed."
      />

      <HomeComponent />
    </div>
  );
}
