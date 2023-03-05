const Navbar = () => {
  return (
    <nav className=" md:px-5 px-3 bg-[#232339] w-full md:h-[15vh] h-[10vh] items-center justify-center">
      <div className=" flex items-center justify-between w-full h-full">
        <img
          className="md:w-[15vh] w-[10vh]"
          src="/ami-news-logo.png"
          alt="ami-news-logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
