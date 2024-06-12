import { Link } from "react-router-dom";
import { list } from "../data/list";
import { useState } from "react";

interface Props {
  handleSelectedOrder: (selectedOrder: string) => void;
}

const SortSelector = ({ handleSelectedOrder }: Props) => {
  const [value, setValue] = useState<string>("");
  const handleClick = () => {
    const elem: HTMLElement | null = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown w-44 text-center bg-zinc-800 rounded-lg">
      <div tabIndex={0} className="cursor-pointer text-white p-2 rounded-md">
        {value ? value : "Order By Relevence "}
      </div>
      <ul
        tabIndex={0}
        className="p-2 shadow menu menu-sm dropdown-content z-[1] text-white bg-black rounded-box w-44"
      >
        {Object.entries(list).map(([key, value]) => (
          <li onClick={handleClick} className="cursor-pointer" key={key}>
            <Link
              onClick={() => {
                setValue(value);
                handleSelectedOrder(value);
              }}
              to="/"
              key={key}
              className="shadow menu menu-sm"
            >
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;
