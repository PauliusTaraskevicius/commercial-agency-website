const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col">
      {children}
    </div>
  );
};

export default LayoutWrapper;
