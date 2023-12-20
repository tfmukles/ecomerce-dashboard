"use client";

import { useDragConstraints } from "@/app/lib/hooks/useDragConstraints";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import brand1 from "../../assets/img/brands/1.png";

export const BrandSlider = () => {
  const contianerRef = useRef<HTMLDivElement>(null);
  const width = useDragConstraints({ target: contianerRef });

  return (
    <motion.div ref={contianerRef} style={{ overflow: "hidden" }}>
      <motion.div
        drag="x"
        dragElastic={0.1}
        dragConstraints={{ right: 0, left: -width }}
        className="brands"
      >
        {[...Array(10)].map((item, i) => (
          <div className="brand" key={i}>
            <Link href={"/"}>
              <Image width={500} height={500} src={brand1} alt="brand" />
            </Link>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
