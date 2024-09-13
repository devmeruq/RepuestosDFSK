import {  Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RepuestosBodega from "./pages/RequestRespuestos/RepuestosBodega";
import Inicio from "./pages/Inicio";
import Solicitud from "./pages/RequestRespuestos/Solicitud";
import CrearRepuesto from "./pages/RequestRespuestos/CrearRepuesto";
import { useCart } from "./hooks/useCart";
import EstadosSolicitudes from "./pages/RequestRespuestos/EstadosSolicitudes";
import Vehicles from "./pages/AddData/Vehicles";
import Login from "./pages/Login";
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    carTotal
  } = useCart()

  return (
    <>
      <AuthProvider>
 
          <Header
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            clearCart={clearCart}
            isEmpty={isEmpty}
            carTotal={carTotal}
          />
          <Routes>
            <Route path="/" element={<Inicio />} index />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Inicio />} />

            <Route path="/repuestos" element={<RepuestosBodega addToCart={addToCart} />} />
            <Route path="/repuestonew" element={<CrearRepuesto />} />
            <Route path="/solicitud" element={
              <Solicitud
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                clearCart={clearCart}
                isEmpty={isEmpty}
                carTotal={carTotal}
              />
            }
            />
            <Route path="/solicitudes" element={<EstadosSolicitudes />} />
            <Route path="/vehiculos" element={<Vehicles />} />

          </Routes>
          <Footer />
          <ToastContainer position="top-center" draggable />


      </AuthProvider>
    </>
  );
}

export default App;
