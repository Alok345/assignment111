import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SearchScreenMedicineWithAl1 from "./pages/SearchScreenMedicineWithAl1";
import SearchScreenMedicineWithAl from "./pages/SearchScreenMedicineWithAl";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/search-screen-medicine-with-all-tab":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SearchScreenMedicineWithAl1 />} />
      <Route
        path="/search-screen-medicine-with-all-tab"
        element={<SearchScreenMedicineWithAl />}
      />
    </Routes>
  );
}
export default App;
