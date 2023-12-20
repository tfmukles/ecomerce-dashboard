import { XMarkIcon } from "@heroicons/react/24/outline";
import ProductPreview from "./product-preview";

interface Props {
  onClose: () => void;
}

const QuickPreview = ({ onClose }: Props) => {
  return (
    <div className="overlay ">
      <div className="product-quick-review">
        <ProductPreview />
        <button onClick={onClose} className="modal-close">
          <XMarkIcon />
        </button>
      </div>
    </div>
  );
};

export default QuickPreview;
