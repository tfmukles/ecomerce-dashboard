import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const BreadCrums = () => {
  return (
    <div className="page-nav-container">
      <div className="container">
        <ul>
          <li>
            <Link href={"/"}>
              <span>Home</span>
              <ChevronRightIcon />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <span>Shop</span>
              <ChevronRightIcon />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <span>List</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrums;
