import SocalLinks from "@/ui/helpers/social-links";
import {
  HeartIcon,
  ShoppingCartIcon,
  StarIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

interface Props {
  children?: React.ReactNode;
}
const ProductPreview = ({ children }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const imgContainer = useRef<HTMLElement>(null);
  const [selectedImg, setSelectedImg] = useState(
    "https://d-themes.com/react_asset_api/molla/uploads/product_1_1_45e247fd69.jpg"
  );
  const productImages = [
    "https://d-themes.com/react_asset_api/molla/uploads/product_1_1_45e247fd69.jpg",
    "https://d-themes.com/react_asset_api/molla/uploads/product_1_1_e4d26c1a1a.jpg",
    "https://d-themes.com/react_asset_api/molla/uploads/product_1_2_a7c10bc1b6.jpg",
  ];
  const onPointerHandler = (e: any) => {
    const img = imageRef.current;
    const container = imgContainer.current;
    if (!img || !container) return null;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = (x - img.offsetLeft) / img.width;
    const offsetY = (y - img.offsetTop) / img.height;

    const zoomFactor = 2;
    const zoomWidth = rect.width / zoomFactor;
    const zoomHeight = rect.height / zoomFactor;

    const translateX = Math.min(
      0,
      Math.max(rect.width - zoomWidth, -(offsetX * (zoomWidth - rect.width)))
    );

    const translateY = Math.min(
      0,
      Math.max(
        rect.height - zoomHeight,
        -(offsetY * (zoomHeight - rect.height))
      )
    );

    img.style.transition = "0s";
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = `scale(${zoomFactor}) translate(${translateX}px, ${translateY}px)`;
  };

  const onPointerLeaveHandler = (e: any) => {
    const img = imageRef.current;
    const container = imgContainer.current;
    if (!img || !container) return null;
    img.style.transition = "0.3s";
    img.style.transform = `scale(${1}) translate(${0}px, ${0}px)`;
  };

  const onSelectChange = (image: string) => setSelectedImg(image);

  return (
    <>
      <section>
        <div className="container">
          <div className="product-details-top">
            <div className="product-gallery-container">
              <div className="product-gallery">
                <figure ref={imgContainer} className="product-main-img">
                  <span className="product-label">Top</span>
                  <img
                    onPointerMove={onPointerHandler}
                    onPointerLeave={onPointerLeaveHandler}
                    ref={imageRef}
                    src={selectedImg}
                    alt=""
                  />
                </figure>
              </div>
              <ul className="product-zoom-gallery">
                {productImages.map((image, i) => (
                  <li key={i}>
                    <button
                      onClick={() => onSelectChange(image)}
                      className={image === selectedImg ? "active" : ""}
                    >
                      <img src={image} alt="" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="entry-summary">
              <div className="product-details">
                <div className="product-title">Beige metal hoop tote bag</div>
                <div className="ratings-container">
                  <div className="ratings">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        <StarIcon />
                      </span>
                    ))}
                  </div>
                  <div className="ratings-text">(2 Reviews)</div>
                </div>
                <div className="product-price">$258 - $300</div>
                <div className="product-content">
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing. Sed lectus.
                  </p>
                </div>
                <div className="product-colors">
                  <label>Color: </label>
                  <ul className="colors-pill">
                    <li>
                      <button
                        className="active"
                        type="button"
                        style={{ background: "rgb(51, 51, 51)" }}
                      ></button>
                    </li>
                    <li>
                      <button
                        type="button"
                        style={{ background: "rgb(51, 51, 51)" }}
                      ></button>
                    </li>
                    <li>
                      <button
                        type="button"
                        style={{ background: "rgb(51, 51, 51)" }}
                      ></button>
                    </li>
                    <li>
                      <button
                        type="button"
                        style={{ background: "rgb(51, 51, 51)" }}
                      ></button>
                    </li>
                  </ul>
                </div>

                <div className="product-size-fitler">
                  <div className="select-size">
                    <label>Size: </label>
                    <select>
                      <option>Select a size</option>
                      <option>Select a size</option>
                    </select>
                  </div>
                  <div className="size-guide">
                    <button>
                      <TableCellsIcon />
                      <span>size guide</span>
                    </button>
                  </div>
                </div>
                <div className="product-size-fitler">
                  <label>Qty: </label>
                  <input type={"number"} min={1} />
                </div>
                <div className="product-list-action">
                  <div className="product-action">
                    <button>
                      <ShoppingCartIcon />
                      <span>Add to cart</span>
                    </button>
                  </div>
                  <div>
                    <button className="add-whishlist">
                      <HeartIcon /> <span>Go to wishlist</span>
                    </button>
                  </div>
                </div>
                <div className="product-details-fotter">
                  <div className="product-catagory">
                    <span>Category: </span>
                    <span>Woman</span>
                  </div>
                  <div className="product-size-fitler">
                    <label>Share: </label>
                    <SocalLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
};

export default ProductPreview;
