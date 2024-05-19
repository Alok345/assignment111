import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="price-wrapper">
      <div className="price">
        <div className="no-stores-selling-this-product-wrapper">
          <div className="no-stores-selling">
            No stores selling this product near you
          </div>
        </div>
        <div className="view-all-offers6-parent">
          <div className="view-all-offers6">View all offers(6)</div>
          <div className="div">(₹100)</div>
        </div>
        <div className="add-button">
          <div className="add-wrapper">
            <b className="add">ADD</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
