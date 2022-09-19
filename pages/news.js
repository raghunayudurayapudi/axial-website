import { useRouter } from "next/router";
import React from "react";
import SEO from "../components/SEO";

export default function News() {
  const router = useRouter();

  return (
    <>
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="News"
        description="News from wholemark organization | eCommerce fulfillment"
        image={"https://wholemark.in/logo512.png"}
      />
      <div>News</div>
    </>
  );
}
