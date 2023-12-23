"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const paths = pathname.split("/").filter((x) => x);
  let parts = [
    {
      label: "Home",
      href: "/",
      "aria-label": pathname === "/" ? "page" : undefined,
    },
  ];

  paths.forEach((label: string, i: number) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    label !== "page" &&
      parts.push({
        label: label.replace(/[-_]/g, " ") || "",
        href,
        "aria-label": pathname === href ? "page" : undefined,
      });
  });

  return (
    <nav aria-label="Breadcrumb" className={`page-nav-container ${className}`}>
      <div className="container">
        <ol role="list">
          {parts.map(({ label, ...attrs }, index) => (
            <li role="listitem" key={index}>
              {index !== parts.length - 1 ? (
                <Link
                  className="text-primary dark:text-darkmode-primary"
                  {...attrs}
                >
                  {label}
                  <ChevronRightIcon />
                </Link>
              ) : (
                <span className="text-light dark:text-darkmode-light">
                  {label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
