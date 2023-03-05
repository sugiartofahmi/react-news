import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { paramState } from "../../store";
const Search = () => {
  const [param, setParam] = useRecoilState(paramState);

  const searchNews = (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      try {
        setParam((prevState) => ({
          ...prevState,
          q: e.target.value,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-[30vh] bg-gray-200 py-1 px-3 ">
      <div className="flex items-center gap-x-3 ">
        <AiOutlineSearch size={25} />

        <input
          onKeyUp={(e) => searchNews(e)}
          type="text"
          className="w-full md:placeholder:text-base placeholder:text-sm bg-gray-200 h-full py-1  focus:outline-none"
          placeholder="Search news"
        />
      </div>
    </div>
  );
};

export default Search;
