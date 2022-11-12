import React from "react";
import { Widget } from "@typeform/embed-react";

import DividerLine from "../components/Common/DividerLine";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <Widget
      id="jRvuSxog"
      style={{ width: "100%", height: "700px" }}
      className="my-form"
    />
  );
};

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

      <div className=" bg-white">
        <h1>Contact Page</h1>
        {/* <ContactForm /> */}
      </div>
    </div>
  );
}

export default Support;
