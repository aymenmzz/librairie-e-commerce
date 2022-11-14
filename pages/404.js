import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex-column height-full">
      <h1 className="text-center title title-padding width-full">
        La route indiquée n&lsquo;est pas bonne.
      </h1>
      <Link href="/">
        <button>Retour à la page d&lsquo;accueil</button>
      </Link>
    </div>
  );
}
