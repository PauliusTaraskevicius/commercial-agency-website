import { DUMMY_DATA } from "@/lib/DUMMY_DATA";
import LandingVideo from "../../components/video-components/landing";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-2 px-2 h-full z-10">
        <div className="col-span-4 flex flex-1 items-center md:col-span-2 ">
          <h1 className="relative text-3xl lg:text-5xl font-bold text-background">
            MOXEY&reg;
          </h1>
          {/* <span className="absolute top-0 right-0 text-sm lg:text-lg">&reg;</span> */}
        </div>

        <div className="col-span-8 flex flex-col justify-evenly md:col-span-2">
          {DUMMY_DATA.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-center  *:uppercase"
            >
              <LandingVideo src={item.video} />
              <div className="uppercase h-9 ">
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
