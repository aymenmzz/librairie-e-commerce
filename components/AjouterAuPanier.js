import { useSelector, useDispatch, useStore } from "react-redux";
import { addBookToCart, addCopyToCart } from "../store/cartActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AjouterAuPanier({ book }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const store = useStore();

  const addToCart = (book) => {
    const { _id, titre } = book;
    const currentBook = cart.find((value) => value._id === _id);
    if (currentBook) dispatch(addCopyToCart(currentBook));
    else dispatch(addBookToCart(book));
    saveCart(titre);
  };

  const saveCart = (bookTitle) => {
    const { cart: state } = store.getState();
    localStorage.setItem("Panier", JSON.stringify(state));
    toast.success(
      `Un exemplaire du livre ${bookTitle} a été ajouté au panier !`
    );
  };

  return (
    <button className="bouton-ajouter" onClick={() => addToCart(book)}>
      Ajouter au panier
    </button>
  );
}
