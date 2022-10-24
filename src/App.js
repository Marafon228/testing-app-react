import './App.css';
import Layout from "./components/shared/Layout";
import AllShop from "./pages/AllShop";
import {Route, Routes} from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import ShopEnterprise from "./pages/ShopEnterprise";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<ShopEnterprise></ShopEnterprise>}></Route>
          </Routes>
          <Routes>
              <Route path="/add-product" element={<AddProduct></AddProduct>}></Route>
              <Route path="/view-product" element={<AllShop></AllShop>}></Route>
              <Route path="/update-product/:Id" element={<UpdateProduct></UpdateProduct>}></Route>
          </Routes>
      </Layout>

  );
}

export default App;
