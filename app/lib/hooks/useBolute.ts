import { useWindowSize } from "./useWindowSize";

const SCREEN_SIZES = {
  lg: 1199,
  md: 991,
  sm: 767,
  xsm: 575,
};

export const useBoulet = () => {
  const { width } = useWindowSize();
  let itemPerPage =
    width > SCREEN_SIZES.lg ? 4 : width > SCREEN_SIZES.md ? 3 : 2;

  return itemPerPage;
};
