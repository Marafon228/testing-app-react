import './App.css';
import Layout from "./components/shared/Layout";
import AllShop from "./pages/AllShop";
import {Route, Routes} from "react-router-dom";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<AllShop></AllShop>}></Route>
          </Routes>
          <Routes>
              <Route path="/add-product" element={<AddProduct></AddProduct>}></Route>
          </Routes>
      </Layout>

  );
}

export default App;
