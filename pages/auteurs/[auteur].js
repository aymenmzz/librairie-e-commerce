import { getAuthors, getBooks } from "../../back/data";
import { client } from "../../back/client";
import CustomHead from "../../components/CustomHead";
import LivresAuteur from "../../components/LivresAuteur";

export default function Auteur({ author, books }) {
  if (!author || !books) {
    return <p style={{ color: "white" }}>Chargement...</p>;
  }
  const { nom, img, description, age } = JSON.parse(author);
  const parsedBooks = JSON.parse(books);

  return (
    <div className="flex-column width-full">
      <CustomHead title={nom} />
      <h1 className="title text-center title-padding rounded"> {nom}</h1>
      <h3 className="title text-center rounded">{age} ans</h3>
      <img src={img} alt={nom} className="auteur-img rounded" />
      <div className="resume">
        <h4 className="text-center">À propos de {nom}</h4>
        <p>{description}</p>
      </div>
      <LivresAuteur books={parsedBooks} authorName={nom} />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  await client.connect();
  const authors = await getAuthors();
  const books = await getBooks();
  const currentAuthor = authors.find(
    (author) => author._id.toString() === context.query.auteur
  );
  const booksOfCurrentAuthor = books.filter(
    (book) => book.auteur === currentAuthor.nom
  );
  const JSONBooks = JSON.stringify(booksOfCurrentAuthor);
  await client.close();
  return {
    props: { author: JSON.stringify(currentAuthor), books: JSONBooks },
    revalidate: 600,
  };
}
