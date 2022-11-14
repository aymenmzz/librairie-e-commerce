import { useState } from "react";
import LoupeLabel from "./LoupeLabel";

export default function SearchBar({
  handleSubmit,
  handleChange,
  search,
  clear,
}) {
  const [hasSearched, setHasSearched] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    handleSubmit(event);
    setHasSearched(true);
  };

  const deleteSearch = () => {
    clear();
    setHasSearched(false);
  };

  return (
    <div className="text-center search-bar">
      <LoupeLabel>
        <input
          value={search}
          id="searchBar"
          onChange={handleChange}
          placeholder="Affinez votre recherche"
        />
      </LoupeLabel>
      {hasSearched && <button onClick={deleteSearch}>Restaurer </button>}
      {search !== "" && <button onClick={submit}>Rechercher</button>}
    </div>
  );
}
