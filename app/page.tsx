import Image from "next/image";
import Link from "next/link";

import { BrandSlider } from "./ui/home/brand-slider";
import Slider from "./ui/slider";

export default function Home() {
  return (
    <section className="home-page">
      <div className="container">
        <div className="intro-section">
          <div className="intro-slider-contianer">
            <Slider />
            <div className="intro-banner">
              <div className="banner">
                <Image
                  width={500}
                  height={500}
                  src={"/img/home/banner/intro/banner-1.jpg"}
                  alt="banner"
                />
                <div className="banner-content">
                  <h4>Clearence</h4>
                  <h3>
                    <Link href={"/"}>
                      Chairs & Chaises <br /> Up to 40% off
                    </Link>
                  </h3>

                  <Link href={"/"} className="banner-link">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="banner">
                <Image
                  width={500}
                  height={500}
                  src={"/img/home/banner/intro/banner-1.jpg"}
                  alt="banner"
                />
                <div className="banner-content">
                  <h4>Clearence</h4>
                  <h3>
                    <Link href={"/"}>
                      Chairs & Chaises <br /> Up to 40% off
                    </Link>
                  </h3>

                  <Link href={"/"} className="banner-link">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <BrandSlider />
        </div>
      </div>
    </section>
  );
}
