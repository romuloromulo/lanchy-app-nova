import { useState } from "react";
import { debounce } from "debounce";
import { BiLoaderCircle } from "react-icons/bi";

function SearchField({ handleSearch }) {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchName = debounce((event) => {
    const value = event.target.value;
    setIsSearching(true);
    handleSearch(value);
  }, 500);

  return (
    <div className="relative flex items-center border-2 rounded-lg border-gray-900 w-full px-2 h-8 bg-inherit">
      <input
        className="placeholder-red-200 text-sm pl-3focus:outline-none w-full h-full bg-inherit outline-none"
        placeholder="Busque Pizza"
        type="text"
        onChange={handleSearchName}
      />
      {isSearching && (
        <BiLoaderCircle className="mr-2 animate-spin" size={22} />
      )}
    </div>
  );
}

export default SearchField;
