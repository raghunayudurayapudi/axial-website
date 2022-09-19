// Copyright 2022 akash
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import { useRouter } from "next/router";
import DividerLine from "../components/Common/DividerLine";
import SEO from "../components/SEO";

export default function Privacy() {
  const router = useRouter();

  return (
    <>
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="Privacy"
        description="WholeMark privacy policy | eCommerce fulfillment"
      />
      <div className="container py-40">
        <div>
          <div className="mb-6 w-fit">
            <h1 className="mb-0">Privacy Policy</h1>
            <DividerLine />
          </div>
          <p>
            WholeMark respects each individual’s right to personal privacy. We
            will collect and use information through our Web site only in the
            ways disclosed in this statement. This statement applies solely to
            information collected at WholeMark(“wholemark.in”) Web site.
          </p>
          <h5>Part I. Information Collection</h5>
          <p>
            WholeMark collects information once our clients approach us. We
            collect the following information about: name, e-mail address,
            phone, and any additional comments. WholeMark does not actively
            market to children, and we never knowingly ask a child under 13 to
            divulge personal information. We collect the following general data
            that is not personally identifiable information through tracking
            software: pages visited on the site, visit duration and location. We
            collect this data for the following general purposes: to fulfill
            your requests for service, conduct research, and improve our
            services.
          </p>

          <h5>Part II. Information Usage</h5>

          <p>
            The information collected by WholeMark will be used for fulfillment
            of your requests for service, to conduct research, and to make
            improvements to our services. The information we collect will not be
            used to create customer profiles based on browsing or purchasing
            history. We will not supplement information collected at our Web
            site with data from other sources. We may offer links to other
            Websites. Please note: When you click on links to other Websites, we
            encourage you to read their privacy policies. Their standards may
            differ from ours. WholeMark reserves the right to revise, amend, or
            modify this policy at any time and in any manner. Notice of any
            revision, amendment, or modification will be posted on the web site.
          </p>
          <h5>Part III. Problem Resolution</h5>
          <p>
            If problems arise, users may contact WholeMark by contacting our
            team at contactus@wholemark.in
          </p>
        </div>
      </div>
    </>
  );
}
