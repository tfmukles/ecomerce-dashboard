import { useEffect, useState } from "react";

interface Props {
  target: React.RefObject<HTMLElement>;
}

export const useDragConstraints = ({ target }: Props): number => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = target.current;
    const handleResize = () => {
      if (!element) return;
      setWidth(element.scrollWidth - element.offsetWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [target]);

  return width;
};
