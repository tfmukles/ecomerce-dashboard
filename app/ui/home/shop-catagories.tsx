import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const ShopByCatagory = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Shop by Categories</h2>
        <div className="catagory-container">
          <div className="col">
            <div className="banner-img">
              <Link href={"/"} className="banner-link">
                <h3 className="banner-title">Home Decor</h3>
                <span>
                  Shop now <ArrowLongRightIcon />
                </span>
              </Link>
              <Image
                width={500}
                height={500}
                src={"/img/home/banner/banner-1.jpg"}
                alt="img"
              />
            </div>
          </div>
          <div className="col col-2">
            <div>
              <div className="banner-img">
                <Link href={"/"} className="banner-link">
                  <h3 className="banner-title">Home Decor</h3>
                  <span>
                    Shop now <ArrowLongRightIcon />
                  </span>
                </Link>
                <Image
                  width={500}
                  height={500}
                  src={"/img/home/banner/banner-2.jpg"}
                  alt="img"
                />
              </div>
            </div>
            <div>
              <div className="banner-img">
                <Link href={"/"} className="banner-link">
                  <h3 className="banner-title">Home Decor</h3>
                  <span>
                    Shop now <ArrowLongRightIcon />
                  </span>
                </Link>
                <Image
                  width={500}
                  height={500}
                  src={"/img/home/banner/banner-3.jpg"}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="banner-img">
              <Link href={"/"} className="banner-link">
                <h3 className="banner-title">Home Decor</h3>
                <span>
                  Shop now <ArrowLongRightIcon />
                </span>
              </Link>
              <Image
                width={500}
                height={500}
                src={"/img/home/banner/banner-4.jpg"}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCatagory;
