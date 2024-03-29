import "../Styles/App.modules.scss";
import NavBar from "../Components/NavBar";
import SideBarSlider from "../Components/SideBarSlider";
import ProductDetail from "../Pages/ProductDetail";

import { Route, Routes } from "react-router-dom";
import HomePavlina from "../Pages/HomePagePavlina";

function App() {
  return (
    <div className="AppWrapper">
      <NavBar />
      <SideBarSlider />
      <Routes>
        <Route path="/" element={<HomePavlina />} />
        <Route path="/:projectId" element={<ProductDetail />} />
        <Route path="*" element={"404 Page not found"} />
      </Routes>
    </div >
  );
}

export default App;
