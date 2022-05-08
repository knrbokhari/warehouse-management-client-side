import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import Login from "./pages/Login/Login/Login";
import Inventory from "./pages/Home/Inventory/Inventory";
import SignUp from "./pages/Login/SignUp/SignUp";
import UpdateInventory from "./pages/UpdateInventory/UpdateInventory";
import RequireAuth from "./hooks/RequireAuth";
import ManageInventorie from "./pages/ManageInventorie/ManageInventorie";
import UpdateSingelProduct from "./pages/UpdateSingelProduct/UpdateSingelProduct";
import AddProduct from "./pages/AddProduct/AddProduct";
import Blogs from "./pages/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/inventory/:productId"
          element={
            <RequireAuth>
              <UpdateInventory></UpdateInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/manageinventorie"
          element={<ManageInventorie></ManageInventorie>}
        ></Route>
        <Route
          path="/updateproduct/:productId"
          element={<UpdateSingelProduct></UpdateSingelProduct>}
        ></Route>
        <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
