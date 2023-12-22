"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Blog = () => {
  const { width } = useWindowSize();

  return (
    <section className="blog-section section-padding">
      <div className="container">
        <h2 className="section-title">From Our Blog</h2>
        <div className="blog-container">
          {[...Array(3)].map((item, i) => {
            if (width <= 991 && width >= 600 && i === 2) return null;
            else {
              return (
                <article key={i}>
                  <div className="blog-item">
                    <figure className="entry-media">
                      <Link href={"/blogs/1"}>
                        <img src={"/home/blog/1.jpg"} alt="blog-img" />
                      </Link>
                    </figure>

                    <div className="entry-body">
                      <div className="entry-meta">
                        <Link href={"/"}>Sep 22, 2020</Link>
                        {"  "}
                        <Link href={"/"}> 0 Comments</Link>
                      </div>

                      <div className="entry-title">
                        <Link href={"/"}>Sed adipiscing odbrnare.</Link>
                      </div>
                      <div className="entry-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Phasellus hendrerit.Pelletesque aliquet nibh
                          necurna.
                        </p>

                        <Link href={"/blogs/1"} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }
          })}
        </div>
        <Link className="more-container" href="/blogs">
          <span>View more articles</span>
          <ArrowLongRightIcon />
        </Link>
      </div>
    </section>
  );
};

export default Blog;
