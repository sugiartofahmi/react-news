const GridLayout = ({ children }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 p-5 ">
      {children}
    </div>
  );
};

export default GridLayout;
