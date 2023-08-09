import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addBookToCart } from "../../store/cartActions";
import { toast } from "react-toastify";
import { getBooks } from "../../back/data";
import CustomHead from "../../components/CustomHead";

const sentenceMapper = (sentence, id) => {
  const modifiedSentence = sentence.replaceAll("- ", "\n");
  <Fragment key={id}>
    {modifiedSentence}.<br />
  </Fragment>;
};

export default function Livre({ book }) {
  const dispatch = useDispatch();
  if (!book) {
    return <p style={{ color: "white" }}>Chargement...</p>;
  }
  const livre = JSON.parse(book);
  const { titre, img, auteur, prix, resume } = livre;

  const ajouterAuPanier = () => {
    dispatch(addBookToCart(livre));
    toast.success(`Un exemplaire du livre ${titre} a été ajouté au panier ! `);
  };

  const formatResume = (text) => {
    const sentences = text.split(".");
    const mappedSentences = sentences.map(sentenceMapper);
    return <p>{mappedSentences}</p>;
  };

  const formatedResume = formatResume(resume);

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
          {formatedResume}
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
