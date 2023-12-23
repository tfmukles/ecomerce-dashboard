"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    name: "Sing In",
    link: "/login",
  },
  {
    name: "Register",
    link: "/register",
  },
];

const LoginForm = () => {
  const pathname = usePathname();

  return (
    <form className="login-container">
      <div className="login-header">
        {pages.map((page) => {
          return (
            <h2 key={page.name}>
              <Link href={page.link}>{page.name}</Link>
              {pathname === page.link && <div className="underline" />}
            </h2>
          );
        })}
      </div>

      <div className="form-group">
        <label htmlFor="email">Username or email address *</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password *</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="form-group-inline">
        <button type="submit" className="btn btn-primary">
          <span> Sign in</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

        <div className="custom-checkbox">
          <input id="policy" type="checkbox" name="aggre" />
          <label htmlFor="policy">
            I agree to the{" "}
            <Link href={""} className="inline-block">
              privacy policy
            </Link>{" "}
            *
          </label>
        </div>
      </div>
      <div className="divider">
        <span>or sign in with</span>
      </div>
      <div className="provider-buttons">
        <button type="button" className="btn btn-primary provider-button">
          <Image src={"/img/google.png"} width={22} height={22} alt="google" />
          Login with Google
        </button>

        <button type="button" className="btn btn-primary provider-button">
          <Image src={"/img/github.png"} width={22} height={22} alt="github" />
          Login with github
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
