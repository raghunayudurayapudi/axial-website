// Copyright 2021 akash

import {
  DeliveriesUnder3Hours,
  Feedback,
  GetInTouch,
  HeroSection,
  HowWeWork,
  MapStats,
  Statistics,
} from "../components/Home/components";

import IntegrationsWeOffer from "components/Home/components/Brands/integrationsWeOffer";
import PlansTable from "components/Home/components/PlansTable";
import { useRouter } from "next/router";
import WaveDivider from "../components/Common/WaveDivider";
import WavesDivider from "../components/Common/WavesDivider";
import Brands from "../components/Home/components/Brands";
import brandsData from "../components/Home/components/Brands/brandsData.json";
import RollUpEcommerce from "../components/Home/components/Brands/rollUpEcommerce";
import SEO from "../components/SEO";

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

      {/* Hero section */}
      <HeroSection />
      <WavesDivider />

      {/* Video section */}
      <DeliveriesUnder3Hours />
      <WaveDivider />
      <Statistics />
      <WaveDivider direction={"down"} />

      {/* Plans Table */}
      <PlansTable />

      {/* Clients and collaborations */}
      <Brands category={brandsData.clients} />
      <RollUpEcommerce category={brandsData.rollUpEcommerce} />
      <Brands category={brandsData.aggregators} />

      {/* Our partners - section */}
      <WaveDivider />
      <MapStats />
      <WaveDivider direction={"down"} />

      {/* How we work section */}
      <HowWeWork />

      {/* Delivering to - section */}
      <IntegrationsWeOffer
        categories={{
          deliveryIntegrations: brandsData.deliveryIntegrations,
          ecomIntegrations: brandsData.integrations,
        }}
      />

      {/* Grow and Connect section */}
      {/* <GrowConnect /> */}

      <WaveDivider />
      <Feedback />
      <WaveDivider direction={"down"} />
      <GetInTouch />
    </div>
  );
}
