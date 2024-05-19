import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Navigation1 from "../components/Navigation1";
import "./SearchScreenMedicineWithAl.css";

const SearchScreenMedicineWithAl = () => {
  const navigate = useNavigate();

  const onLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="search-screen-medicine-with-al1">
      <div className="medicines-group">
        <div className="medicines4">
          <div className="medicines5">All</div>
        </div>
        <div className="salt2">
          <div className="salt3">Salt</div>
        </div>
        <div className="health-product1">
          <div className="heath-products1">Heath Products</div>
        </div>
        <div className="medicines6">
          <div className="medicines7">Medicines</div>
        </div>
      </div>
      <div className="navigation2">
        <div className="home1">{`Home > `}</div>
        <div className="search6">Search</div>
      </div>
      <div className="navigation3">
        <div className="logo-gradient1">
          <div className="lorem-ipsum1">Lorem Ipsum</div>
          <div className="business1">BUSINESS</div>
        </div>
        <div className="search7">
          <img className="search-icon2" alt="" src="/search-icon.svg" />
          <div className="search8">Search</div>
        </div>
        <div className="cart2">
          <img
            className="fluentcart-16-regular-icon1"
            alt=""
            src="/fluentcart16regular.svg"
          />
          <div className="cart3">Cart</div>
        </div>
        <div className="search9">
          <img className="search-icon3" alt="" src="/search-icon-1.svg" />
          <div className="search-medicines1">Search medicines / Pharmacies</div>
        </div>
        <div className="location1">
          <div className="address1">
            <div className="thane-4212021">Thane, 421202</div>
            <img className="bxmap-icon1" alt="" src="/bxmap.svg" />
          </div>
        </div>
      </div>
      <main className="search-screen-medicine-with-al-child">
        <section className="frame-section">
          <div className="cappsule-web-development-test-container">
            <h2 className="cappsule-web-development1">
              Cappsule web development test
            </h2>
          </div>
          <div className="frame-div">
            <div className="search-frame">
              <div className="search10">
                <div className="frame-parent1">
                  <div className="vector-wrapper">
                    <img
                      className="frame-item"
                      loading="lazy"
                      alt=""
                      src="/line-98.svg"
                      onClick={onLineIconClick}
                    />
                  </div>
                  <div className="medicine">Medicine</div>
                </div>
                <div className="search11">Search</div>
              </div>
            </div>
            <div className="line-parent">
              <div className="frame-inner" />
              <div className="frame-wrapper">
                <div className="med-1-parent">
                  <div className="med-1">
                    <FrameComponent2 />
                    <div className="med-1-inner">
                      <div className="group-div">
                        <div className="salt-a-wrapper">
                          <div className="salt-a">Salt A</div>
                        </div>
                        <div className="tablet-100mg">
                          Tablet |100mg | 5 strips
                        </div>
                      </div>
                    </div>
                    <FrameComponent1 />
                  </div>
                  <div className="med-2">
                    <FrameComponent2
                      propWidth="257px"
                      propPadding="unset"
                      propBoxShadow="unset"
                      propBorder="1.5px dashed var(--accent)"
                      propBoxShadow1="unset"
                      propBorder1="1.5px dashed var(--accent)"
                      propBorder2="1px solid var(--color-darkgray)"
                    />
                    <div className="med-2-inner">
                      <div className="salt-b-parent">
                        <div className="salt-b">Salt B</div>
                        <div className="tablet-100mg1">
                          Tablet | 100mg | 5 strips
                        </div>
                      </div>
                    </div>
                    <FrameComponent />
                  </div>
                  <div className="med-3">
                    <div className="frame-parent2">
                      <div className="frame-wrapper1">
                        <div className="form-parent">
                          <div className="form">Form :</div>
                          <div className="strength">Strength :</div>
                          <div className="packaging">Packaging :</div>
                        </div>
                      </div>
                      <div className="frame-parent3">
                        <div className="capsule-wrapper">
                          <div className="capsule">Capsule</div>
                        </div>
                        <div className="mg-wrapper">
                          <div className="mg">500 mg</div>
                        </div>
                        <div className="strips-wrapper">
                          <div className="strips">30 strips</div>
                        </div>
                      </div>
                    </div>
                    <div className="med-3-inner">
                      <div className="frame-parent4">
                        <div className="salt-c-wrapper">
                          <div className="salt-c">Salt C</div>
                        </div>
                        <div className="capsule-500mg">
                          Capsule | 500mg | 30 strips
                        </div>
                      </div>
                    </div>
                    <FrameComponent />
                  </div>
                  <div className="med-4">
                    <div className="frame-parent5">
                      <div className="frame-parent6">
                        <div className="frame-wrapper2">
                          <div className="frame-parent7">
                            <div className="form-wrapper">
                              <div className="form1">Form :</div>
                            </div>
                            <div className="frame-parent8">
                              <div className="tablet-wrapper">
                                <div className="tablet">Tablet</div>
                              </div>
                              <div className="injection-wrapper">
                                <div className="injection">Injection</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-parent9">
                          <div className="frame-wrapper3">
                            <div className="syrup-wrapper">
                              <div className="syrup">Syrup</div>
                            </div>
                          </div>
                          <div className="frame-wrapper4">
                            <div className="topicals-wrapper">
                              <div className="topicals">Topicals</div>
                            </div>
                          </div>
                          <div className="more-wrapper">
                            <b className="more">more..</b>
                          </div>
                        </div>
                      </div>
                      <div className="frame-parent10">
                        <div className="strength-wrapper">
                          <div className="strength1">Strength :</div>
                        </div>
                        <div className="frame-parent11">
                          <div className="mg-container">
                            <div className="mg1">100 mg</div>
                          </div>
                          <div className="mg-frame">
                            <div className="mg2">500 mg</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-parent12">
                        <div className="packaging-wrapper">
                          <div className="packaging1">Packaging :</div>
                        </div>
                        <div className="strips-container">
                          <div className="strips1">5 strips</div>
                        </div>
                        <div className="strips-frame">
                          <div className="strips2">10 strips</div>
                        </div>
                      </div>
                    </div>
                    <div className="med-4-inner">
                      <div className="salt-d-parent">
                        <div className="salt-d">Salt D</div>
                        <div className="tablet-100mg2">
                          Tablet | 100mg | 5 strips
                        </div>
                      </div>
                    </div>
                    <FrameComponent1 propPadding="38px 0px 0px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Navigation1 />
    </div>
  );
};

export default SearchScreenMedicineWithAl;
