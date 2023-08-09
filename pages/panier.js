import { Fragment } from "react";
import { useSelector } from "react-redux";
import CustomHead from "../components/CustomHead";
import LivrePanier from "../components/LivrePanier";

const cartMapper = (value, index) => {
  const styleOfLastRow = styleForLastRow(index);
  <Fragment key={index}>
    <LivrePanier
      book={value}
      formatTitle={eneleveTiretEtDeuxPoints}
      style={`table-row rounded ${styleOfLastRow}`}
    />
  </Fragment>;
};

const styleForLastRow = (index) =>
  index === cart.length - 1 ? "last-row" : "";

const eneleveTiretEtDeuxPoints = (texte) => {
  const texteSansTiret = texte.split(" - ")[0];
  const texteSansDeuxPoint = texteSansTiret.split(":");
  const texteFinal = texteSansDeuxPoint[0];
  return texteFinal;
};

export default function Panier() {
  const cart = useSelector((state) => state.cart);
  const sum = cart.reduce(
    (total, { prix, amount }) => total + prix * amount,
    0
  );

  const booksOfCart = cart.map(cartMapper);

  return (
    <div className="flex-column">
      <CustomHead title="Panier" />
      {cart[0] ? (
        <>
          <div className="text-center title rounded">
            <h1>Votre panier : </h1>
            <h2>Total : {sum.toFixed(2)}€</h2>
          </div>
          <table className="width-full">{booksOfCart}</table>
        </>
      ) : (
        <h1 className="text-center title title-padding rounded">
          Panier vide.
        </h1>
      )}
    </div>
  );
}
