import { HeartIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const DropDown = () => {
  return (
    <ul className="top-menu">
      <li>
        <a href="tel:+4733378901">
          <PhoneIcon />
          <span>CALL +47 333 78 901</span>
        </a>
      </li>
      <li>
        <a href="/">
          <HeartIcon />
          <span>MY WISHLIST ( 0 )</span>
        </a>
      </li>
      <li>
        <Link href={"/about"}>About us</Link>
      </li>
      <li>
        <Link href={"/about"}>Contact us</Link>
      </li>
      <li>
        <Link href={"/login"}>
          <UserIcon />
          <span>Login</span>
        </Link>
      </li>
    </ul>
  );
};

export default DropDown;
