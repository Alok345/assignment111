import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({ propPadding }) => {
  const frameDiv4Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="med-1-child" style={frameDiv4Style}>
      <div className="from80-parent">
        <div className="from80">
          <span className="from">From₹</span>
          <span className="span">80</span>
        </div>
        <div className="mrp100">
          <span>MRP</span>
          <span className="span1">₹</span>
          <span>100</span>
        </div>
        <div className="add-to-cart-wrapper">
          <div className="add-to-cart">Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
