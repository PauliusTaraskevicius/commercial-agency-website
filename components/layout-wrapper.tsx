const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed top-0 left-0 z-[0] w-full h-full">
      {children}
    </div>
  );
};

export default LayoutWrapper;
