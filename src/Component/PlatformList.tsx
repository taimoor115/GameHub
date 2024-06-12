import { Link } from "react-router-dom";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  platformId: (platform: number) => void;
  handleSelect: (platform: string) => void;
  selectedValue: string;
}
const PlatformList = ({ platformId, handleSelect, selectedValue }: Props) => {
  const { data } = usePlatforms();

  const handleClick = () => {
    const elem: HTMLElement | null = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown w-32 text-center bg-zinc-800 rounded-lg">
      <div tabIndex={0} className="cursor-pointer text-white p-2 rounded-md ">
        {selectedValue ? selectedValue : "Platforms"}
      </div>
      <ul
        tabIndex={0}
        className="p-2 shadow menu menu-sm cursor-pointer dropdown-content z-[1] text-white bg-black rounded-box w-52"
      >
        {data.map((platform) =>
          platform.results.map((platform) => (
            <li key={platform.id} onClick={handleClick}>
              <Link
                to="/"
                onClick={() => {
                  handleSelect(platform.name);
                  platformId(platform.id);
                  handleClick;
                }}
              >
                {platform.name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PlatformList;
