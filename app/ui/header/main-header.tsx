"use client";

import CartList from "@/ui/cart/cart-list";
import TopHeader from "@/ui/header/top-header";
import Search from "@/ui/search";
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  setOpen: any;
}

interface navTypes {
  id: number;
  text: string;
  link: string;
  nested?: [];
}

export const navs: navTypes[] = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Shop",
    link: "/shop/list",
  },

  {
    id: 3,
    text: "Blogs",
    link: "/blogs",
  },
];

const Header = () => {
  const [, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const { scrollY } = useScroll();

  const [isFixied, setFixied] = useState(false);
  const onClose = () => {
    setOpen((open: boolean) => !open);
  };

  scrollY.onChange((y) => {
    y > 250 ? setFixied(true) : setFixied(false);
  });

  return (
    <header>
      <div className="container">
        <TopHeader />
      </div>

      <div className={`main-header-wrapper ${isFixied ? "fixed" : ""}`}>
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <button onClick={onClose} type="button" className="nav-toggler">
                <i className="fa fa-bars nav-toggler-icon"></i>
              </button>
              <Link href={"/"}>
                <Image
                  src={"/img/logo.png"}
                  width={105}
                  height={24}
                  alt="brand-logo"
                />
              </Link>
              <ul>
                {navs.map((nav) => (
                  <li key={nav.id}>
                    <Link href={nav.link}>
                      <span>{nav.text}</span>
                      {false && <ChevronDownIcon />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header-right">
              <ul>
                <li className="search-wrapper">
                  <Search />
                </li>
                <li className="cart-dropdown">
                  <button onClick={() => router.push("/shop/cart")}>
                    <ShoppingCartIcon />
                    <span className="cart-count">0</span>
                  </button>

                  <CartList />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
