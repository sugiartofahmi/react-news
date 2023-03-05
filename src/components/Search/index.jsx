import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  return (
    <div className="w-[30vh] bg-gray-200 py-1 px-3 ">
      <div className="flex items-center gap-x-3 ">
        <AiOutlineSearch size={25} />

        <input
          type="text"
          className="w-full md:placeholder:text-base placeholder:text-sm bg-gray-200 h-full py-1  focus:outline-none"
          placeholder="Search news"
          id=""
        />
      </div>
    </div>
  );
};

export default Search;
