import React from 'react'
import ReactDOM from "react-dom";
import './episode.scss'
import { useGetEpisodeQuery } from '../../api/apiSlice'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import closeIcon from '../../assets/close-bold.svg';
import Button from '../../components/Button/Button';
import { PATH } from '../../constants/constants';

const Episode = () => {
  const { episodeId } = useParams()
  const { data, isLoading, isSuccess } = useGetEpisodeQuery(episodeId)
  const navigate = useNavigate();

  const characters = data?.characters.map((e, i) => <Button key={i} path={PATH.character} url={e} name={i} />)

  const content = (
    <div className='episode__content'>
      <h2 className='episode__name'>{data?.name} - {data?.episode}</h2>
      <p className='episode__date'>{data?.air_date}</p>
    </div>
  )
  
  return ReactDOM.createPortal(
    <div className='episode'>
      <div className='episode__modal'>
        <img 
        onClick={() => navigate(-1)}
          className='episode__close' 
          src={closeIcon} 
          alt="close" 
        />
        {isLoading && <Loading />}
        {isSuccess && !isLoading && content}
        <p>List of characters:</p>
        <div className='episode__charactersList'>
          {characters}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Episode