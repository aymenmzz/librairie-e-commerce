import { Fragment } from "react";
import Livre from "../components/Livre";
import { getTopFive } from "../back/data";
import CustomHead from "../components/CustomHead";

const booksMapper = (value) => (
  <Fragment key={value._id}>
    <Livre book={value} topFive="top-cinq" />
  </Fragment>
);

function TopCinq({ topFive }) {
  if (!topFive) {
    return <p style={{ color: "white" }}>Chargement...</p>;
  }

  const data = JSON.parse(topFive);

  const books = data.map(booksMapper);

  return (
    <div className="flex-column">
      <CustomHead title="Top 5" />
      <h1 className="text-center title title-padding rounded">Mon top 5 : </h1>
      {books}
    </div>
  );
}
export default TopCinq;

export async function getStaticProps() {
  const topFive = await getTopFive();
  return {
    props: { topFive: JSON.stringify(topFive) },
    revalidate: 600,
  };
}
