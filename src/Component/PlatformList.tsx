import { Link } from "react-router-dom";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  platformId: (platform: number) => void;
}
const PlatformList = ({ platformId }: Props) => {
  const { data: platforms } = usePlatforms();
  const handleClick = () => {
    const elem: HTMLElement | null = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };
  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        className="cursor-pointer text-white bg-transparent p-2 rounded-md "
      >
        Platforms
      </div>
      <ul
        tabIndex={0}
        className="p-2 shadow menu menu-sm dropdown-content z-[1] text-white bg-black rounded-box w-52"
      >
        {platforms.map((platform) => (
          <li key={platform.id} onClick={handleClick}>
            <Link to="/" onClick={() => platformId(platform.id)}>
              {platform.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformList;
