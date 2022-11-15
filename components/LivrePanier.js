import { useDispatch, useStore } from "react-redux";
import {
  removeCopyFromCart,
  removeFromCart,
  addCopyToCart,
} from "../store/cartActions";
import BoutonAjouter from "./BoutonAjouter";
import BoutonSupprimer from "./BoutonSupprimer";
import CustomLink from "./CustomLink";

export default function LivrePanier({ book, style, formatTitle }) {
  const dispatch = useDispatch();
  const store = useStore();

  const { amount, _id, titre, prix, img } = book;

  const willDelete = amount === 1;

  const increment = () => {
    dispatch(addCopyToCart(book));
    save();
  };

  const decrement = () => {
    dispatch(removeCopyFromCart(book));
    save();
  };

  const deleteBook = () => {
    dispatch(removeFromCart(_id));
    save();
  };

  const save = () => {
    const { cart: state } = store.getState();
    localStorage.setItem("Panier", JSON.stringify(state));
  };

  const boutonsAjouterEtSupprimer = (
    <div className="boutons-panier">
      <BoutonSupprimer willDelete={willDelete} decrement={decrement} />
      {amount}
      <BoutonAjouter increment={increment} amount={amount} titre={titre} />
    </div>
  );

  return (
    <tr className={style}>
      <td className="table-width">
        <CustomLink href={`/livres/${_id}`} noHover={true}>
          <img
            src={img}
            className="table-img border-black rounded"
            alt={titre}
          />
        </CustomLink>
      </td>
      <th className="text-center table-title">
        {window.innerWidth > 450 ? titre : formatTitle(titre)}
      </th>
      <th className="table-price">{prix.toFixed(2)}€</th>
      <th>
        <div className="flex-column">
          {boutonsAjouterEtSupprimer}
          <button onClick={deleteBook}>Supprimer</button>
        </div>
      </th>
    </tr>
  );
}
