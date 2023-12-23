import { useWindowSize } from "@/hooks//useWindowSize";
import CustomeSelect from "@/ui/helpers/custome-select";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import DropDown from "../helpers/dropdown";

const TopHeader = () => {
  const { width } = useWindowSize();

  return (
    <div className="top-header">
      <div className="header-left">
        <CustomeSelect>
          <li>Usd</li>
          <li>Eur</li>
        </CustomeSelect>
        <CustomeSelect>
          <li>Usd</li>
          <li>Eur</li>
        </CustomeSelect>
      </div>

      <div className="header-right">
        {width! > 991 ? (
          <DropDown />
        ) : (
          <ul>
            <li>
              <a href="/">
                <span>Links</span>
                <ChevronDownIcon />
              </a>

              <DropDown />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
