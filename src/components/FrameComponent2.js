import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  propWidth,
  propPadding,
  propBoxShadow,
  propBorder,
  propBoxShadow1,
  propBorder1,
  propBorder2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      border: propBorder,
    };
  }, [propBoxShadow, propBorder]);

  const frameDiv2Style = useMemo(() => {
    return {
      boxShadow: propBoxShadow1,
      border: propBorder1,
    };
  }, [propBoxShadow1, propBorder1]);

  const frameDiv3Style = useMemo(() => {
    return {
      border: propBorder2,
    };
  }, [propBorder2]);

  return (
    <div className="frame-parent13" style={frameDivStyle}>
      <div className="frame-parent14">
        <div className="frame-wrapper5">
          <div className="form-group">
            <div className="form2">Form :</div>
            <div className="strength2">Strength :</div>
            <div className="packaging2">Packaging :</div>
          </div>
        </div>
        <div className="frame-parent15">
          <div className="tablet-container">
            <div className="tablet1">Tablet</div>
          </div>
          <div className="frame-wrapper6">
            <div className="mg-wrapper1" style={frameDiv1Style}>
              <div className="mg3">100 mg</div>
            </div>
          </div>
          <div className="strips-wrapper1" style={frameDiv2Style}>
            <div className="strips3">5 strips</div>
          </div>
        </div>
      </div>
      <div className="frame-parent16">
        <div className="frame-wrapper7">
          <div className="injection-container">
            <div className="injection1">Injection</div>
          </div>
        </div>
        <div className="mg-wrapper2" style={frameDiv3Style}>
          <div className="mg4">500 mg</div>
        </div>
        <div className="frame-wrapper8">
          <div className="strips-wrapper2">
            <div className="strips4">10 strips</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
