import { useSelector, useDispatch, useStore } from "react-redux";
import { addBookToCart, addCopyToCart } from "../store/cartActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AjouterAuPanier({ book }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const store = useStore();

  const addToCart = (book) => {
    const { _id, titre } = book;
    if (spotById(_id)) {
      const currentBook = cart.find((value) => value._id === _id);
      dispatch(addCopyToCart(currentBook));
    } else dispatch(addBookToCart(book));
    const { cart: state } = store.getState();
    localStorage.setItem("Panier", JSON.stringify(state));
    toast.success(`Un exemplaire du livre ${titre} a été ajouté au panier !`);
  };

  const spotById = (id) =>
    cart.reduce(
      (isIn, value) => (isIn = value._id.toString() === id ? !isIn : isIn),
      false
    );

  return (
    <button className="bouton-ajouter" onClick={() => addToCart(book)}>
      Ajouter au panier
    </button>
  );
}
