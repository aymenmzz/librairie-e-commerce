import CustomLink from "./CustomLink";
import { useSelector, useDispatch } from "react-redux";
import { nextIndex, prevIndex } from "../store/indexActions";
import AjouterAuPanier from "./AjouterAuPanier";
import BoutonDroite from "./BoutonDroite";
import BoutonGauche from "./BoutonGauche";

export default function LivresAuteur({ books, authorName }) {
  const index = useSelector((state) => state.index);
  const dispatch = useDispatch();

  const { length } = books;
  const decrement = () => dispatch(prevIndex(length));
  const increment = () => dispatch(nextIndex(length));
  const { img, _id, titre } = books[index];

  const moreThanOneBook = length > 1;
  const auPluriel = moreThanOneBook ? "s" : "";

  return (
    <div className="flex-column title rounded">
      <h3 className="text-center">
        Livre{auPluriel} de {authorName}
      </h3>
      <div className="flex-around">
        {moreThanOneBook && <BoutonGauche onClick={decrement} />}
        <CustomLink href={`/livres/${_id}`}>
          <img
            className="book-img rounded border-black"
            src={img}
            alt={titre}
          />
        </CustomLink>
        {moreThanOneBook && <BoutonDroite onClick={increment} />}
      </div>
      <AjouterAuPanier book={books[index]} />
    </div>
  );
}
