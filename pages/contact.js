// Copyright 2021 akash

import { useRouter } from "next/router";
import SEO from "../components/SEO";
import ContactComponent from "components/Contact";

export default function Contact() {
  const router = useRouter();

  return (
    <div>
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="Contact"
        description="Contact Us for any additional information."
      />

      <ContactComponent />
    </div>
  );
}