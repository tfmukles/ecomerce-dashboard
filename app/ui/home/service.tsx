import { RocketLaunchIcon } from "@heroicons/react/24/outline";

const Service = () => {
  return (
    <div className="service-section">
      <div className="container">
        <div className="icon-box-container">
          {[...Array(3)].map((box, i) => (
            <div className="icon-box" key={i}>
              <div className="icon-box-icon">
                <RocketLaunchIcon />
              </div>
              <div>
                <h2 className="icon-box-title">Payment & Delivery</h2>
                <p>Free shipping for orders over $50</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
