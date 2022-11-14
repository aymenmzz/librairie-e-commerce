import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Provider, useDispatch } from "react-redux";
import { store } from "../store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { setInitalCart } from "../store/cartActions";

function MyApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedCart = localStorage.getItem("Panier");
    storedCart && dispatch(setInitalCart(JSON.parse(storedCart)));
  }, []);

  return <ToastContainer />;
}

function AppWithProvider({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar>
        <Component {...pageProps} />
        <MyApp />
      </Navbar>
    </Provider>
  );
}

export default AppWithProvider;
