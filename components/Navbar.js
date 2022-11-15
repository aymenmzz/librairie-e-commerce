import React from "react";
import Panier from "./Panier";
import CustomLink from "./CustomLink";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ children }) {
  const { pathname } = useRouter();
  const selectedPath = pathname.split("/")[1];

  const isSelectedPath = (path) => path === selectedPath;
  return (
    <>
      <nav className="container navbar">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 adjust-logo ${
              isSelectedPath("") && "selected"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </Link>
        <CustomLink href="/livres" selected={isSelectedPath("livres")}>
          Livres
        </CustomLink>
        <CustomLink href="/auteurs" selected={isSelectedPath("auteurs")}>
          Auteurs
        </CustomLink>
        <CustomLink href="/topcinq" selected={isSelectedPath("topcinq")}>
          Mon top 5
        </CustomLink>
        <Link href="/apropos">
          <a className={`link ${isSelectedPath("apropos") && "selected"}`}>
            À propos
          </a>
        </Link>
        <Panier selected={isSelectedPath("panier")} />
      </nav>
      {children}
    </>
  );
}
