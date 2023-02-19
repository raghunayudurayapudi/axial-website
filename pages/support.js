import React from "react";

import SEO from "../components/SEO";
import { useRouter } from "next/router";

function Support() {
  const router = useRouter();

  return (
    <div>
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="Support"
        description="Support or contact page | eCommerce fulfillment"
        image={""}
      />

      <div className="bg-white ">
        <h1>Contact Page</h1>
        {/* <ContactForm /> */}
      </div>
    </div>
  );
}

export default Support;
