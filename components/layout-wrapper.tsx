const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:max-w-[1400px] flex flex-col h-full">
      {children}
    </div>
  );
};

export default LayoutWrapper;
