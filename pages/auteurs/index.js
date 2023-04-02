import { getAuthors } from "../../back/data";
import { client } from "../../back/client";
import Auteur from "../../components/Auteur";
import { Fragment } from "react";
import CustomHead from "../../components/CustomHead";

export default function Auteurs({ authors }) {
  const parsedAuthors = JSON.parse(authors);

  return (
    <div className="flex-column">
      <CustomHead title="Auteurs" />
      <h1 className="text-center title title-padding rounded">Auteurs :</h1>
      <div className="grid-2">
        {parsedAuthors.map((author) => (
          <Fragment key={author._id}>
            <Auteur author={author} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  await client.connect();
  const authors = await getAuthors();
  await client.close();
  return {
    props: { authors: JSON.stringify(authors) },
    revalidate: 600,
  };
}
