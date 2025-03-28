interface LandingVideoProps {
  src: string | undefined;
}

const LandingVideo = ({ src }: LandingVideoProps) => {
  return (
    // opacity-0 hover:opacity-100 transition ease-in duration-150

    <video
      className="fixed right-0 top-0 max-w-[inherit] object-cover w-full h-full z-10 bg-transparent"
      autoPlay={true}
      loop={true}
      muted
      src={src}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default LandingVideo;
