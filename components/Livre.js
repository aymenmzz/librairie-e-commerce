import React from "react";
import AjouterAuPanier from "./AjouterAuPanier";
import CustomLink from "./CustomLink";

const limitTo45Words = (str) => {
  const tabStr = str.split(" ");
  const filteredTab = tabStr.filter((val, index) => index < 45);
  return filteredTab.join(" ");
};

export default function Livre({ book, topFive }) {
  const { titre, _id, auteur, resume, img } = book;

  const limitedResume = limitTo45Words(resume);

  return (
    <div
      className={`flex-column text-center border-black book rounded ${
        topFive && topFive
      }`}
    >
      <CustomLink href={`/livres/${_id}`} noHover={true}>
        <h2>{titre}</h2>
      </CustomLink>
      <h3>Par {auteur}</h3>
      <p>{`${limitedResume} ...`}</p>
      <CustomLink href={`/livres/${_id}`} noHover={true}>
        <img className="book-img border-black rounded" src={img} alt={titre} />
      </CustomLink>
      <AjouterAuPanier book={book} />
    </div>
  );
}
