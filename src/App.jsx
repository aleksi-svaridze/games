import { Routes, Route } from "react-router";
import { DesktopHeader } from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <div className="bg-linear-to-b from-[#0d0d0e] to-[#29292a] pb-10">
      <DesktopHeader />
      <div className="container mx-auto px-5 lg:px-0">
        <Routes>
          <Route index element={<HomePage />} />

          <Route path="pc" element={<ProductsPage />} />
          <Route path="pc/:id" element={<SingleProductPage />}>
            <Route path="" element={<SingleProductPage />} />
          </Route>

          <Route path="playstation" element={<ProductsPage />} />
          <Route path="playstation/:id" element={<SingleProductPage />}>
            <Route path="" element={<SingleProductPage />} />
          </Route>

          <Route path="xbox" element={<ProductsPage />} />
          <Route path="xbox/:id" element={<SingleProductPage />}>
            <Route path="" element={<SingleProductPage />} />
          </Route>

          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
