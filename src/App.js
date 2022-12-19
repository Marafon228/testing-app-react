import './App.css';
import Layout from "./components/shared/Layout";
//import Layout from "./components/Layout";
import EnterpriseProducts from "./pages/EnterpriseProducts";
import {Route, Routes} from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import ShopEnterprise from "./pages/ShopEnterprise";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Order from "./pages/Order";
import Lk from "./pages/Lk";
import UpdateOrder from "./pages/UpdateOrder";


function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<ShopEnterprise></ShopEnterprise>}></Route>
          </Routes>
          <Routes>
              <Route path='/main' element={<Main />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/lk' element={<Lk />} />
              <Route path="/add-product" element={<AddProduct></AddProduct>}></Route>
              <Route path="/order" element={<Order></Order>}></Route>
              <Route path="/register" element={<Register></Register>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/view-product/:Id" element={<EnterpriseProducts></EnterpriseProducts>}></Route>
              <Route path="/update-product/:Id" element={<UpdateProduct></UpdateProduct>}></Route>
              <Route path="/update-order/:Id" element={<UpdateOrder></UpdateOrder>}></Route>
          </Routes>
      </Layout>

  );
}

export default App;
