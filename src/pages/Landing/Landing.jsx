import React, { useState } from "react";
import Search from "../../components/Search/Search";
import "./landing.scss";
import { useGetCharactersQuery } from "../../api/apiSlice";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";

const Landing = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(JSON.parse(localStorage.getItem('currentPage')) || 1);
  const { data, isLoading, isSuccess } = useGetCharactersQuery(currentPage);
  let filteredCharacters = data?.results.filter((ch) => ch.name.toLowerCase().includes(searchText.toLowerCase()) ) || [];
  if (searchText) filteredCharacters = filteredCharacters.slice(0, 10);

  const content = filteredCharacters.map((character) => {
    return (
      <Card
        key={character.id}
        id={character.id}
        image={character.image}
        location={character.location.name}
        name={character.name}
        status={character.status}
      />
    );
  });

  return (
    <div className="landing">
      <Search setSearchText={setSearchText} />
      {isLoading && <Loading />}
      {isSuccess && !isLoading && (
        <div className="landing__cardsBox">{content}</div>
      )}
      {isSuccess && !isLoading && !searchText && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={data.info.pages}
        />
      )}
    </div>
  );
};

export default Landing;
