import Link from "next/link";
import CustomHead from "../components/CustomHead";
import CustomLink from "../components/CustomLink";
import { useEffect } from "react";

export default function Home() {
  const linkStyle = { color: "red" };
  return (
    <main className="text-center">
      <CustomHead title="Librairie" />
      <h1>Bienvenue dans ma librairie personnelle !</h1>
      <h3> En quoi ça consiste ?</h3>
      <p>
        On m&lsquo;a souvent demandé quels livres j&lsquo;avais lus et quels
        étaient les meilleurs selon moi.
        <br />
        J&lsquo;ai donc imaginé une sorte de boutique e-commerce recensant une
        partie des livres que j&lsquo;ai lus.
      </p>
      <h3>Quel intérêt ?</h3>
      <p>
        Supposons qu&lsquo;un ou plusieurs de mes livres vous intéressent, vous
        pouvez estimer précisément le prix que cela vous coûtera en ajoutant
        chacun de ces livres au panier.
      </p>
      <h3>Informations complémentaires : </h3>
      <p>
        La section{" "}
        <CustomLink href="/auteurs" style={linkStyle}>
          Auteur
        </CustomLink>{" "}
        est dédiée aux auteurs que j&lsquo;ai le plus aimé lire, avec une
        description brève de ceux-ci et une séléction des livres qu&lsquo;ils
        ont écrits.
        <br />
        NB : N&lsquo;ayant pas lu tous les livres de tous les auteurs
        mentionnés, la liste est non exhaustive et ne représente que les livres
        qui sont visibles sur ce projet.
      </p>
      <p>
        La section{" "}
        <Link href="/apropos" style={linkStyle}>
          <a style={linkStyle}>À propos</a>
        </Link>{" "}
        est plus techniques : J&lsquo;énumere les différentes technologies
        utilisées dans ce projet, et je présente les différentes fonctionnalités
        pour chacune d&lsquo;entre elles.
      </p>
    </main>
  );
}
