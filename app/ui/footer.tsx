import Image from "next/image";
import Link from "next/link";
import payments from "../assets/img/payments.png";
import SocalLinks from "./helpers/social-links";

const data = [
  {
    title: "Useful Links",
    links: [
      {
        id: 1,
        text: "About Molla",
        link: "/",
      },

      {
        id: 2,
        text: "How to shop on Molla",
        link: "/",
      },

      {
        id: 3,
        text: "FAQ",
        link: "/",
      },

      {
        id: 4,
        text: "Contact us",
        link: "/",
      },
      {
        id: 5,
        text: "Log in",
        link: "/",
      },
    ],
  },
  {
    title: "Customer Service",
    links: [
      {
        id: 1,
        text: "Payment Methods",
        link: "/",
      },
      {
        id: 2,
        text: "Money-back guarantee!",
        link: "/",
      },
      {
        id: 3,
        text: "Returns",
        link: "/",
      },
      {
        id: 4,
        text: "Shipping",
        link: "/",
      },
      {
        id: 5,
        text: "Terms and conditions",
        link: "/",
      },
      {
        id: 6,
        text: "Privacy Policy",
        link: "/",
      },
    ],
  },
  {
    title: "My Account",
    links: [
      {
        id: 1,
        text: "Sign In",
        link: "/",
      },
      {
        id: 2,
        text: "View Cart",
        link: "/",
      },
      {
        id: 3,
        text: "My Wishlist",
        link: "/",
      },
      {
        id: 4,
        text: "Track My Order",
        link: "/",
      },
      { id: 5, text: "Help", link: "/" },
    ],
  },
];

const Fotter = () => {
  return (
    <footer className="section-padding">
      <div className="container">
        <div className="footer-container">
          <div>
            <Link href={"/"}>
              <Image
                src={"/img/logo.png"}
                width={105}
                height={24}
                alt="brand-logo"
              />
            </Link>
            <p>
              Praesent dapibus, neque id cursus ucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat.
            </p>
            <ul>
              <li>
                <Link href={"/"}></Link>
              </li>
            </ul>
            <SocalLinks className="footer-socal" />
          </div>
          {data.map((item, i) => (
            <div key={i}>
              <h4 className="widget-title">{item.title}</h4>
              <ul>
                {item.links.map(({ id, link, text }, i) => (
                  <li key={id}>
                    <Link href={link}>{text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2023 Molla Store. All Rights Reserved.</p>
          <div>
            <Image src={payments} alt="payments" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
