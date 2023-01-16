const CSSWrapper = ({ children }: { children: any }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="px-6">{children}</div>
    </div>
  );
};

export default CSSWrapper;
