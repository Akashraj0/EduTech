import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Intership from "./pages/Internship";
import Layout from "./Layout";
import Home from "./pages/Home";
import MasterClass from "./pages/MasterClass";
import Workshop from "./pages/Workshop";
import CheckoutForm from "./components/Strip/CheckoutForm";
import Return from "./components/Strip/Return";
import "./App.scss";
import Apply from "./pages/Apply";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/internship" element={<Intership />} />
          <Route path="/masterclass" element={<MasterClass />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/embedded" element={<CheckoutForm />} />
          <Route path="/return" element={<Return />} />
          <Route path="/apply" element={<Apply />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
