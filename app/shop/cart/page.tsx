import BreadCrums from "@/ui/helpers/breadcrums";
import ProductHeader from "@/ui/helpers/product-header";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Cart = () => {
  return (
    <section className="shopping-cart">
      <ProductHeader title={"Shopping Cart"} />
      <BreadCrums />

      <div className="container">
        <div className="cart-list-container">
          <table className="table">
            <thead>
              <tr>
                <th>Product </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="product-cart">
                      <figure className="product-media">
                        <Link href={"/"}>
                          <img
                            src="https://d-themes.com/react_asset_api/molla/uploads/product_2_1_300x300_1cbb2b1986.jpg"
                            alt=""
                          />
                        </Link>
                      </figure>
                      <h4 className="product-title">
                        <Link href="/">
                          Block Side Table/Trolley - Green, Medium
                        </Link>
                      </h4>
                    </div>
                  </td>
                  <td> $210.00</td>
                  <td>
                    <div className="product-cart-button">
                      <button>-</button>7<button>+</button>
                    </div>
                  </td>
                  <td>
                    <span className="product-total">$20</span>
                  </td>
                  <td className="remove-col">
                    <button className="btn-remove">
                      <XMarkIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="summary-container">
            <div className="summary summary-cart">
              <div className="summary-title">Cart Total</div>
              <table className="table-summary">
                <tbody>
                  <tr className="summary-subtotal">
                    <td>Subtotal:</td>
                    <td>$1,490.00</td>
                  </tr>
                  <tr className="summary-shipping">
                    <td>Shopping</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="summary-shipping-row">
                    <td>
                      <div className="radio-button">
                        <input id="freeShopping" type="radio" name="expense" />
                        <label htmlFor="freeShopping">Free Shipping</label>
                      </div>
                    </td>
                  </tr>
                  <tr className="summary-shipping-row">
                    <td>
                      <div className="radio-button">
                        <input id="standard" type="radio" name="expense" />
                        <label htmlFor="standard">Standard: </label>
                      </div>
                    </td>
                  </tr>
                  <tr className="summary-shipping-row">
                    <td>
                      <div className="radio-button">
                        <input id="express" type="radio" name="expense" />
                        <label htmlFor="express">Express:</label>
                      </div>
                    </td>
                  </tr>
                  <tr className="summary-shipping-estimate">
                    <td>
                      Estimate for Your Country
                      <button>Change address</button>
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="summary-total">
                    <td>Total</td>
                    <td>$1,510.00</td>
                  </tr>
                </tbody>
              </table>

              <button className="process-to">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
