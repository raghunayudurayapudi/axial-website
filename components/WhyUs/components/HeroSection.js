import DividerLine from "../../Common/DividerLine";
import { WavesDivider } from "../../Home/components";

import YouTube from "react-youtube";

export default function HeroSection() {
  const opts = {
    height: 300,
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="flex flex-col items-center justify-between text-white md:flex-row">
          <div className="w-full md:w-2/5 mb-8">
            <h1 className="text-4xl mb-4">
              {"Make Fulfillment Your Competitive Advantage"}
            </h1>
            <DividerLine />
          </div>

          <div className="md:w-1/5" />
          <div className="w-full md:w-2/5">
            <YouTube
              videoId="AkisNytV1I0"
              opts={opts}
              onReady={(e) => e.target.pauseVideo()}
            />
          </div>
        </div>
      </div>
      <WavesDivider direction={"down"} />
    </div>
  );
}
