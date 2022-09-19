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

const supportList = [
  {
    title: "Phone",
    descriptionn: "call us at +91-9000046373 from anytime 7am to 12pm",
    icon: (
      <FontAwesomeIcon icon={faMobileAlt} fontSize="large" color="retailer" />
    ),
  },
  {
    title: "Email",
    descriptionn: "Email us at contact@wholemark.in",
    icon: (
      <FontAwesomeIcon
        icon={faEnvelopeCircleCheck}
        fontSize="large"
        color="retailer"
      />
    ),
  },
];

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
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <h1>{"Contact Us"}</h1>
              <DividerLine />
            </div>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* <div
                
                sx={{
                    pt: 2,
                    pb: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    backgroundColor: 'primary.main',
                    color: "white",
                    // backgroundImage: "linear-gradient(180deg, #12294C, #12294C, #000024)"
                }}>
                <div maxWidth="lg">
                    <Typography variant='h1' sx={{
                        mt: 20,
                        mb: 8,
                        textAlign: 'center',
                    }}>
                        {"Customer Support"}
                    </Typography>

                </div>
            </div>

            <div
                
                sx={{
                    py: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    backgroundColor: '#000024',
                    minHeight: '60vh',
                    color: 'white'
                }}>
                <div maxWidth="lg">
                    <Typography variant='h4' sx={{
                        mt: 6,
                        textAlign: 'center',
                    }}>
                        {"We're here to help"}
                    </Typography>
                    <Typography variant='h5' sx={{
                        mt: 4,
                        mb: 8,
                        textAlign: 'center',
                    }}>
                        {"Have an issue with an order or feedback for us? Our support team is here to help you from 7am - 12am."}
                    </Typography>

                    <div sx={{
                        display: 'flex',
                        mt: 6,
                        justifyContent: 'center'
                    }}>
                        {supportList.map(s => <SupportCard key={s.title} data={s} />)}
                    </div>


                </div>
            </div>
             */}
    </div>
  );
}

export default Support;
