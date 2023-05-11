import React from "react";
import "./character.scss";
import { Outlet, useParams } from "react-router-dom";
import { useGetCharacterQuery } from "../../api/apiSlice";
import Loading from "../../components/Loading/Loading";
import Status from "../../components/Status/Status";
import Button from "../../components/Button/Button";
import { PATH } from "../../constants/constants";
import Error from "../Error/Error";

const Character = () => {
  // get id of selected character from path and fetch data using rtk query
  const { characterId } = useParams();
  const { data, isLoading, isSuccess } = useGetCharacterQuery(characterId);

  // if character is not found
  if(!isLoading && !isSuccess) return <Error />;

  // generate episodes links
  // props:
  // url - url of episode
  // path: constant without id parameter
  // name: button content with episode number
  const episodes = data?.episode.map((e, i) => <Button key={i} url={e} path={PATH.episode} name={i} />)

  const content = (
    <div className="character__content">
      <div className="character__image">
        <img src={data?.image} alt="image" />
        <Status status={data?.status} />
      </div>
      <div className="character__text">
        <h2 className="character__name">{data?.name}</h2>
        <p className="character__info">
          <span>Gender: </span>
          {data?.gender}
        </p>
        <p className="character__info">
          <span>Location: </span>
          {data?.location.name}
        </p>
        <p className="character__info">
          <span>Origin: </span>
          {data?.origin.name}
        </p>
        <p className="character__info">
          <span>Species: </span>
          {data?.species}
        </p>
      </div>
    </div>
  );

  return (
    <div className="character">
      {isLoading && <Loading />}
      {isSuccess && !isLoading && content}
      <p>List of episodes:</p>
      <div className="character__episodesList">
        {episodes}
      </div>
      <Outlet />
    </div>
  );
};

export default Character;
