

const DUMMY_DATA = [
  {
    title: "A christmas story",
    about: "Food banks in Norway",
    time: "01:19",
  },
  {
    title: "Bli for live",
    about: "Stavanger business region",
    time: "00:50",
  },
  {
    title: "Energy to power progress",
    about: "Shell Norway",
    time: "03:31",
  },
  {
    title: "Good energy",
    about: "Easee",
    time: "03:08",
  },
  {
    title: "Free your business",
    about: "PIO",
    time: "02:24",
  },
  {
    title: "Bella ciao - netflix",
    about: "Altibox",
    time: "04:11",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-x-2 h-screen px-2">

      <div className="col-span-4 flex flex-1 items-center md:col-span-2 js-home-logo max-md:[&>*]:pointer-events-none">
        <h1 className="relative text-3xl md:text-5xl font-bold">MOXEY&reg;</h1>
        {/* <span className="absolute top-0 right-0 text-sm lg:text-lg">&reg;</span> */}
      </div>

      <div className="col-span-8 flex flex-col justify-evenly  md:col-span-2">
        <div className="flex flex-col h-full justify-center space-y-[6rem] *:uppercase">
          {DUMMY_DATA.map((item) => (
            <div key={item.title}>
              <h2>{item.title}</h2>
              <span>[{item.about}]</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-md:hidden relative -z-[10] col-span-4 col-start-9 font-exposure text-[32px] leading-[1.125] tracking-wide flex items-center max-w-[430px]">
        <span className="flex text-3xl md:text-5xl font-bold tracking-tight items-center">
          Inspired narrative from the ground up.
        </span>
      </div>
      
    </div>

  );
}
