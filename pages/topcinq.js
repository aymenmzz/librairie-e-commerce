import { Fragment } from "react";
import Livre from "../components/Livre";
import { getTopFive } from "../back/data";
import CustomHead from "../components/CustomHead";

function TopCinq({ topFive }) {
  const data = JSON.parse(topFive);

  return (
    <div className="flex-column">
      <CustomHead title="Top 5" />
      <h1 className="text-center title title-padding rounded">Mon top 5 : </h1>
      {data.map((val) => (
        <Fragment key={val._id}>
          <Livre book={val} topFive="top-cinq" />
        </Fragment>
      ))}
    </div>
  );
}
export default TopCinq;

export async function getServerSideProps() {
  const topFive = await getTopFive();

  return { props: { topFive: JSON.stringify(topFive) } };
}
