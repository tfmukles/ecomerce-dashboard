"use client";

import {
  DefaultGrid,
  FourByTwo,
  ThreeByTwo,
  TwoByTwo,
} from "@/app/icons/grid-icons";
import BreadCrums from "@/ui/helpers/breadcrums";
import ProductHeader from "@/ui/helpers/product-header";
import Product from "@/ui/product";
import Widget from "@/ui/widget";
import { useState } from "react";

const GridSystem = [
  {
    width: "100%",
    id: 1,
    type: "default",
    icon: <DefaultGrid />,
  },
  {
    id: 2,
    width: "50%",
    type: "two",
    icon: <TwoByTwo />,
  },
  {
    id: 3,
    width: "33.333%",
    type: "three",
    icon: <ThreeByTwo />,
  },
  {
    id: 4,
    width: "25%",
    type: "four",
    icon: <FourByTwo />,
  },
];

const ShopList = () => {
  const [grid, setGrid] = useState(GridSystem[0]);

  return (
    <section>
      <ProductHeader title={"Cart"} />
      <BreadCrums />

      <div className="container">
        <div className="shop-products">
          <aside>
            <div className="widget widget-shop">
              <div className=" widget-button">
                <p>Filters</p>
                <p>Clean All</p>
              </div>
            </div>

            <div className="widget-collapsible">
              <Widget />
            </div>

            <div className="widget-collapsible">
              <Widget />
            </div>

            <div className="widget-collapsible">
              <Widget />
            </div>
          </aside>
          <main>
            <div className="tollbox">
              <div className="tollbox-left">
                Showing <span>5 of 35</span> Products
              </div>
              <div className="tollbox-right">
                <div className="tollbox-sort">
                  <label>Sort by:</label>
                  <select>
                    <option>Default</option>
                    <option>Most Popular</option>
                  </select>
                </div>
                <div className="tollbox-layout">
                  {GridSystem.map((item) => (
                    <button
                      onClick={() => setGrid(item)}
                      key={item.id}
                      className={`${item.type === grid.type ? "active" : ""}`}
                    >
                      {item.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`product-list-container ${grid.type} ${
                grid.type !== "default" ? "wrap" : ""
              }`}
            >
              <Product
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ShopList;
