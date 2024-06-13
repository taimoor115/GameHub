import { FormEvent, useState } from "react";

interface Props {
  handleSearchText: (searchText: string) => void;
}

const SearchInput = ({ handleSearchText }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleClick = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    handleSearchText(searchValue);
    setSearchValue("");
  };
  return (
    <label className="input input-bordered bg-inherit flex items-center ml-5 lg:mr-3 md:mr-3">
      <input
        value={searchValue}
        type="text"
        className="grow text-white"
        placeholder="Search games..."
        onClick={handleClick}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-5 h-5 text-white"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};

export default SearchInput;
