import React from "react";
import CustomLink from "./CustomLink";

export default function Auteur({ author }) {
  const { nom, img, _id } = author;

  return (
    <div className="text-center auteur rounded">
      <CustomLink href={`/auteurs/${_id}`}>
        <>
          <h2>{nom}</h2>
          <img className="image-center rounded" src={img} alt={nom} />
        </>
      </CustomLink>
    </div>
  );
}
