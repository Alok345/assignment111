import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation2 from "../components/Navigation2";
import "./SearchScreenMedicineWithAl1.css";

const SearchScreenMedicineWithAl1 = () => {
  const navigate = useNavigate();

  const onTypeYourMedicineClick = useCallback(() => {
    navigate("/search-screen-medicine-with-all-tab");
  }, [navigate]);

  return (
    <div className="search-screen-medicine-with-al">
      <div className="medicines-parent">
        <div className="medicines">
          <div className="medicines1">All</div>
        </div>
        <div className="salt">
          <div className="salt1">Salt</div>
        </div>
        <div className="health-product">
          <div className="heath-products">Heath Products</div>
        </div>
        <div className="medicines2">
          <div className="medicines3">Medicines</div>
        </div>
      </div>
      <div className="navigation">
        <div className="home">{`Home > `}</div>
        <div className="search">Search</div>
      </div>
      <header className="navigation1">
        <div className="logo-gradient">
          <div className="lorem-ipsum">Lorem Ipsum</div>
          <div className="business">BUSINESS</div>
        </div>
        <div className="search1">
          <img className="search-icon" alt="" src="/search-icon.svg" />
          <div className="search2">Search</div>
        </div>
        <div className="cart">
          <img
            className="fluentcart-16-regular-icon"
            alt=""
            src="/fluentcart16regular.svg"
          />
          <div className="cart1">Cart</div>
        </div>
        <div className="search3">
          <img className="search-icon1" alt="" src="/search-icon-1.svg" />
          <div className="search-medicines">Search medicines / Pharmacies</div>
        </div>
        <div className="location">
          <div className="address">
            <div className="thane-421202">Thane, 421202</div>
            <img className="bxmap-icon" alt="" src="/bxmap.svg" />
          </div>
        </div>
      </header>
      <section className="search-screen-medicine-with-al-inner">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="cappsule-web-development-test-wrapper">
              <h3 className="cappsule-web-development">
                Cappsule web development test
              </h3>
            </div>
            <div className="frame-container">
              <div className="search-wrapper">
                <div className="search4">
                  <img
                    className="risearch-line-icon"
                    alt=""
                    src="/risearchline.svg"
                  />
                  <div className="abc">ABC</div>
                  <div className="type-your-medicine-name-here-wrapper">
                    <div
                      className="type-your-medicine"
                      onClick={onTypeYourMedicineClick}
                    >
                      Type your medicine name here
                    </div>
                  </div>
                  <div className="search-container">
                    <div className="search5">Search</div>
                  </div>
                </div>
              </div>
              <div className="frame-child" />
            </div>
          </div>
          <div className="find-medicines-with-amazing-di-wrapper">
            <div className="find-medicines-with">
              “ Find medicines with amazing discount “
            </div>
          </div>
        </div>
      </section>
      <Navigation2 />
    </div>
  );
};

export default SearchScreenMedicineWithAl1;
