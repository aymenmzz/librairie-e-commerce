import { Fragment, useState } from "react";
import Livre from "../../components/Livre";
import { getBooks } from "../../back/data";
import SearchBar from "../../components/SearchBar";
import CustomHead from "../../components/CustomHead";

export default function Livres({ books }) {
  const [data, setData] = useState(JSON.parse(books));
  const [search, setSearch] = useState("");

  const handleChange = (event) => setSearch(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = JSON.parse(books);
    const filteredData = newData.filter((state) => correspondsToSearch(state));
    setData(filteredData);
  };

  const correspondsToSearch = (state) => {
    const searchLowered = search.toLowerCase();
    const { titre, auteur } = state;
    return (
      titre.toLowerCase().includes(searchLowered) ||
      auteur.toLowerCase().includes(searchLowered)
    );
  };

  const clearSearch = () => {
    setData(JSON.parse(books));
    setSearch("");
  };

  return (
    <div className="flex-column bg-black">
      <CustomHead title="Livres" />
      <div className="title rounded">
        <h1 className="text-center">Livres :</h1>
        <SearchBar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          clear={clearSearch}
          search={search}
        />
      </div>
      {data.length === 0 ? (
        <h2 className="text-center title rounded title-padding">
          Aucun résultat disponible.
        </h2>
      ) : (
        <div className="grid-2">
          {data.map((value) => (
            <Fragment key={value._id}>
              <Livre book={value} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getBooks();
  return { props: { books: JSON.stringify(data) } };
}
