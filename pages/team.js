import React from "react";
import Head from "next/head";
import {
  CoFounder,
  HeroSection,
  TeamMembers,
} from "../components/Team/components";
import WavesDivider from "../components/Common/WavesDivider";
import DividerLine from "../components/Common/DividerLine";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import { UPLOADS_URL } from "utils/constants";

const founderInformation = [
  {
    name: "Pranay Ganesh",
    designation: "Co-Founder/CEO",
    socialMediaLinks: [
      {
        mediaType: "LinkedIn",
        link: "https://www.linkedin.com/in/pranay-ganesh-koneni/",
      },
    ],
    avatarLink: `${UPLOADS_URL}/assets/team/pranay.jpeg`,
    avatarAlt: "Pranay Ganesh - Chief Executive Officer",
    introduction:
      "Pranay is a Data Scientist & Growth Strategist with experience in building analytics capabilities to aid business decisions at early stage startups. He is a Student-founder from Duke University’s Fuqua School of Business. He is responsible for directing the company towards the goals and objectives using innovative growth strategies",
  },
  {
    name: "Laxmi Priya Guttikonda",
    designation: "Co-Founder/COO",
    socialMediaLinks: [
      {
        mediaType: "LinkedIn",
        link: "https://www.linkedin.com/in/guttikondalakshmipriya/",
      },
    ],
    avatarLink: `${UPLOADS_URL}/assets/team/priya.jpeg`,
    avatarAlt: "Laxmi Priya Guttikonda - Chief Operations Officer",
    introduction:
      "Lakshmi Priya is a passionate serial entrepreneur, an expert in creating seamless Business operations and SOPs. She owned and maintained bubble tea stores for 2 years and worked as project manager for 1 year in an organisation called ALEAP where she worked with multiple early-stage women entrepreneurs and provided solutions for several problems faced by these women especially in the Marketing domain. Under guidance of industry experts, she mastered FMCG Product marketing and product-market analysis (retail). In WholeMark, she handles warehouse management, End-mile Logistics, and other operations.",
  },
  {
    name: "Srinith Madapathi",
    designation: "Co-Founder/CBO",
    socialMediaLinks: [
      {
        mediaType: "LinkedIn",
        link: "https://www.linkedin.com/in/srinithmadapathi/",
      },
    ],
    avatarLink: `${UPLOADS_URL}/assets/team/srinith.jpeg`,
    avatarAlt: "Srinith Madapathi - Chief Business Officer",
    introduction:
      "Srinith is a passionate serial entrepreneur. An expert in creating business processes, technical documentation, and business analytics. He has 4 years of experience in direct sales and 3 years of experience as a technical project designer, delivering 10+ tech projects. He embarked his journey into retail in early 2019 as a distributor along with co-founder Lakshmi Priya. The knowledge and experience he's gained helped to lay foundation to “Today’s WHOLEMARK” and to run it successfully. He has been a part and parcel of the functioning of supply chain, creating processes for the same in WholeMark.",
  },
];

const teamMembersInformation = [
  {
    // testing an avatar
    avatarAlt: "Tech Lead - Goutham",
    avatarLink: `${UPLOADS_URL}/assets/team/goutham.png`,
    name: "Goutham",
    designation: "Tech Lead",
    linkedin: "#",
  },
  {
    avatarAlt: "Tech lead - akash",
    avatarLink: `${UPLOADS_URL}/assets/team/akash-avatar.png`,
    name: "Akash",
    designation: "Tech Lead",
    linkedin: "#",
  },
  {
    avatarAlt: "Tech lead - Raghu Naidu",
    avatarLink: `${UPLOADS_URL}/assets/team/placeholder-male.png`,
    name: "Raghu Naidu",
    designation: "Tech Lead",
    linkedin: "#",
  },
  {
    avatarAlt: "Product designer - ashna",
    avatarLink: `${UPLOADS_URL}/assets/team/ashna.jpg`,
    name: "Ashna Mittal",
    designation: "Product Designer",
    linkedin: "https://www.linkedin.com/in/ashnamittal/",
  },
  {
    avatarAlt: "Content Manager - Reshma",
    avatarLink: `${UPLOADS_URL}/assets/team/reshma.png`,
    name: "Reshma Pradeep",
    designation: "Marketing Manager",
    linkedin: "#",
  },
  {
    avatarAlt: "Full Stack Developer - Balaji Kummari",
    avatarLink: `${UPLOADS_URL}/assets/team/balaji.png`,
    name: "Balaji Kummari",
    designation: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/balajikummari/",
  },
  {
    avatarAlt: "Full Stack Developer - Kaustubh",
    avatarLink: `${UPLOADS_URL}/assets/team/kaustubh.jpg`,
    name: "Kaustubh",
    designation: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/kaustubh-e/",
  },
  {
    avatarAlt: "Full Stack Developer - Venkatesh",
    avatarLink: `${UPLOADS_URL}/assets/team/venkatesh.jpg`,
    name: "Venkateshwara Rao",
    designation: "ASE - Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/venky-jayasurya/",
  },
  {
    avatarAlt: "UI/UX - Karthik",
    avatarLink: `${UPLOADS_URL}/assets/team/placeholder-male.png`,
    name: "Karthik Kotambedu",
    designation: "UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/karthik-kotambedu-a57092223/",
  },
];

export default function Team() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="Team"
        description="WholeMark team featuring their roles in the company | eCommerce fulfillment"
        image={""}
      />
      <div className="container flex flex-col items-center text-center">
        <div>
          <h4>{"Co-Founders"}</h4>
          <DividerLine />
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {founderInformation.map((founder, index) => (
            <CoFounder key={index} {...founder} />
          ))}
        </div>

        <div className="mt-10">
          <h4>{"Team"}</h4>
          <DividerLine />
        </div>
        <div className="mb-20 flex flex-row flex-wrap justify-center">
          {teamMembersInformation.map((member, index) => (
            <TeamMembers key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
