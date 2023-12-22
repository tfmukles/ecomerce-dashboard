"use client";

import TabPills from "../helpers/tab-pill";
import Product from "../product";

const tabs = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "FURNITURE",
  },
  {
    id: 3,
    text: "DECORATION",
  },
  {
    id: 4,
    text: "LIGHTING",
  },
];

const RecentProduct = () => {
  return (
    <section>
      <div className="container">
        <div className="recent-product-collention">
          <h2 className="section-title">Recent Arrivals</h2>
          <TabPills tabsList={tabs} />
          <div className="product-container">
            {[...Array(10)].map((item, i) => (
              <Product key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProduct;
