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


const settings = {
    graphql: {
        uri: "http://wholemark.in/api",
    },
    meta: {
        rootUrl: "http://wholemark.in",
        title: "WholeMark",
        description: "WholeMark is your ecommerce fulfillment partner, customers ordering your product online will enjoy ultra fast deliveries and an unparalleled post purchase experience that translates to increased sales and customer loyalty.",
        social: {
            graphic:
                "https://www.wholemark.in/logo192.png",
            twitter: "@wholemarkin",
        },
    },
    routes: {
        authenticated: {
            pathAfterFailure: "/login",
        },
        public: {
            pathAfterFailure: "/home",
        },
    },
};

// {
//     "@context": "https://schema.org/",
//     "@type": "Organization",
//     "name": "WholeMark",
//     "url": "https://www.wholemark.in/home",
//     "logo": "https://www.wholemark.in/home",
//     "image": "https://www.wholemark.in/_next/static/media/wholemark-logo-white.67d4903a.svg",
//     "description": "We provide stress-free integration with your current online sales channels and fulfill your orders with the highest accuracy and speed.",
//     "address": "WholeMark, C9RG+WFM, Phase 2, HITEC City, Hyderabad, Telangana, India 500081",
//     "telephone": "+91 7893716883",
//     "brand": {
//       "@type": "Organization",
//       "name": "WholeMark",
//       "logo": "",
//       "url": "https://www.wholemark.in/home"
//     }
//   }

export default settings;