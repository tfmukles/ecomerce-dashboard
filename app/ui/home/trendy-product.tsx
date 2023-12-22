"use client";

import { useBoulet } from "@/hooks//useBolute";
import { useDragConstraints } from "@/hooks//useDragConstraints";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TabPills from "../helpers/tab-pill";
import Product from "../product";

export const tabs = [
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

const TrendyProduct = () => {
  const produtLength = 7;
  let itemPerPage = useBoulet();
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWdith] = useState(0);
  const [selectedBulet, setSelectedBulet] = useState(0);
  let width = useDragConstraints({ target: containerRef });
  const sizeOfbulet = Math.ceil(produtLength / itemPerPage);
  const cardWidth = containerWidth / produtLength;

  const translateXForElement = (element: HTMLDivElement) => {
    const transform = element.style.transform;
    if (!transform || transform.indexOf("translateX(") < 0) {
      return 0;
    }

    const extractTranslateX = transform.match(/translateX\((-?\d+)/);
    return extractTranslateX && extractTranslateX.length === 2
      ? parseInt(extractTranslateX[1], 10)
      : 0;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    setContainerWdith(containerRef.current.scrollWidth);
  }, []);

  const onBuletClick = async (pageNumber: number) => {
    let x = -(cardWidth * pageNumber * itemPerPage);
    setSelectedBulet(pageNumber);
    await controls.start({ x });
  };

  const onDragEndHandler = (event: any, info: PanInfo) => {
    if (!containerRef.current) return;
    const element = containerRef.current.querySelector("div");
    const xPos = translateXForElement(element as HTMLDivElement);
    const boulet = Math.round(Math.abs(xPos) / (cardWidth * itemPerPage));
    setSelectedBulet(boulet);
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div>
          <h2 className="section-title">Trendy Products</h2>
          <TabPills tabsList={tabs} />
          <div ref={containerRef} className="trendy-collention">
            <motion.div
              onDrag={onDragEndHandler}
              drag="x"
              animate={controls}
              dragMomentum={false}
              dragElastic={0.1}
              dragConstraints={{ right: 0, left: -width }}
              dragTransition={{
                bounceStiffness: 400,
                timeConstant: 900,
                min: 200,
                max: 500,
              }}
              transition={{ duration: 0.3 }}
              className="product-container trendy"
            >
              {[...Array(produtLength)].map((item, i) => (
                <Product i={i + 1} key={i} />
              ))}
            </motion.div>
          </div>

          <ul className="bulets">
            {[...Array(sizeOfbulet)].map((_, i) => (
              <motion.li
                animate={{ width: selectedBulet === i ? 16 : 8 }}
                transition={{ duration: 0.1 }}
                onClick={() => onBuletClick(i)}
                key={i}
                className={`${i === selectedBulet ? "active" : ""}`}
              ></motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrendyProduct;
