interface LandingVideoProps {
  src: string | undefined
}

const LandingVideo = ({ src }: LandingVideoProps) => {
  return (
    <video
      className="fixed right-0 top-0 max-w-[inherit] object-cover w-full h-full -z-10"
      autoPlay={false}
      loop={true}
      muted
      src={src}
    />
  );
};

export default LandingVideo;
