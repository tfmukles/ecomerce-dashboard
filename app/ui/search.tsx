import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const [isExpand, setExand] = useState(false);
  const toggleExpand = () => setExand(!isExpand);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: any) => {
    if (!searchRef.current) return;

    if (!searchRef.current.contains(event.target)) {
      setExand(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => handleClick(event));
    return () => {
      document.removeEventListener("click", (event) => handleClick(event));
    };
  }, []);

  return (
    <div ref={searchRef} className={isExpand ? "search" : ""}>
      {isExpand && (
        <input type={"text"} placeholder={"Search product ..."} name="search" />
      )}
      <button onClick={toggleExpand}>
        <MagnifyingGlassIcon />
      </button>
    </div>
  );
};

export default Search;
