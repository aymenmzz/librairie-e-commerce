import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addBookToCart } from "../../store/cartActions";
import { toast } from "react-toastify";
import { getBooks } from "../../back/data";
import CustomHead from "../../components/CustomHead";

export default function Livre({ book }) {
  const dispatch = useDispatch();
  if (!book) {
    console.log("loading...");
    return <p style={{ color: "white" }}>Loading...</p>;
  }
  const livre = JSON.parse(book);
  const { titre, img, auteur, prix, resume } = livre;

  const ajouterAuPanier = () => {
    dispatch(addBookToCart(livre));
    toast.success(`Un exemplaire du livre ${titre} a été ajouté au panier ! `);
  };

  const formatResume = (text) => {
    const separatingDots = text.split(".");
    return (
      <p>
        {separatingDots.map((sentence, id) => (
          <Fragment key={id}>
            {sentence.replaceAll("- ", "\n")}.<br />
          </Fragment>
        ))}
      </p>
    );
  };

  return (
    <>
      <CustomHead title={titre} />
      <div className="page-livre text-center">
        <div className="title rounded">
          <h1>{titre}</h1>
          <h3>
            Écrit par {auteur} <br />
            <br />
            {prix.toFixed(2)}€
          </h3>
        </div>
        <img src={img} alt={titre} />
        <button className="bouton-ajouter" onClick={ajouterAuPanier}>
          Ajouter au panier
        </button>
        <div className="resume rounded">
          <h4>Résumé : </h4>
          {formatResume(resume)}
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { livre: "635960d02029f92b7ad44bcb" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const data = await getBooks();
  const book = data.find(
    (value) => value._id.toString() === context.params.livre
  );
  return {
    props: { book: JSON.stringify(book) },
    revalidate: 600,
  };
}
