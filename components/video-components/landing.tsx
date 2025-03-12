interface LandingVideoProps {
  src: string;
}

const LandingVideo = ({ src }: LandingVideoProps) => {
  return (
    <video
      className="fixed right-0 top-0 max-w-[inherit] object-cover w-full h-full -z-10"
      autoPlay={true}
      loop={true}
      muted
    >
      <source
        className="max-sm:hidden"
        type="video/mp4"
        // src="/videos/hills.mp4"
        src={src}
      />
    </video>
  );
};

export default LandingVideo;
