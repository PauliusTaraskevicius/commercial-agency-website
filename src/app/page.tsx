"use client";

import { DUMMY_DATA } from "@/lib/DUMMY_DATA";
import LandingVideo from "../../components/video-components/landing";
import { useState } from "react";

export default function Home() {
  const [videoSrc, setVideoSrc] = useState<number>(1);

  function handleVideoBackground(videoId: number) {
    switch (videoId) {
      case 1:
        return "/videos/hills.mp4";
      case 2:
        return "/videos/driving_desert.mp4";
      case 3:
        return "/videos/ocean.mp4";
      case 4:
        return "/videos/vessel.mp4";
      case 5:
        return "/videos/wind_energy.mp4";
      case 6:
        return "/videos/waves.mp4";
      default:
        return "/videos/waves.mp4";
    }
  }

  const sourceVid = handleVideoBackground(videoSrc);

  return (
    <>
      <div className=" grid grid-cols-12 gap-x-2 px-2 h-full z-10">
        <div className=" col-span-4 flex flex-1 items-center md:col-span-2 ">
          <div className="relative pr-4">
            <h1 className=" text-3xl lg:text-5xl font-bold text-background">
              MOXEY
            </h1>
            <span className="absolute -top-1 right-0 text-sm lg:text-lg text-white">
              &reg;
            </span>
          </div>
        </div>

        <div className="col-span-8 flex flex-col justify-evenly md:col-span-2">
          {DUMMY_DATA.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-center  *:uppercase"
            >
              <LandingVideo src={sourceVid} />

              <div
                className="uppercase h-9"
                onMouseOver={() => setVideoSrc(item.id)}
              >
                <h2 className="cursor-pointer hover:text-background whitespace-nowrap text-background/50">
                  {item.title}
                </h2>
                <span className="cursor-pointer hover:text-background whitespace-nowrap text-background/50">
                  [ {item.about} ]
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-md:hidden relative -z-[10] col-span-4 col-start-9 font-exposure text-[32px] leading-[1.125] tracking-wide flex items-center max-w-[430px]">
          <span className="flex text-3xl md:text-5xl font-bold tracking-tight items-center text-background">
            Inspired narrative from the ground up.
          </span>
        </div>
      </div>
    </>
  );
}
