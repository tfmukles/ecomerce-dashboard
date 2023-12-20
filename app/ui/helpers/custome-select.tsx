import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface Props {
  children: any;
}

const CustomeSelect = ({ children }: Props) => {
  const [selectFeild, setSelectFeild] = useState("USD");

  return (
    <div className="selector">
      <button onClick={() => setSelectFeild("USD")} className="select-field">
        <span>{selectFeild}</span>
        <ChevronDownIcon />
      </button>
      <ul className="select-list">{children}</ul>
    </div>
  );
};

export default CustomeSelect;
