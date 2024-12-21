import React, { useEffect } from 'react'
import './Titlecard.css'
import card_data from '../../assets/cards/Cards_data'
import { useRef ,useState} from 'react'
import { Link } from 'react-router'
function Titlecard({title,category}) {
  const cardRef = useRef();
  const [apiData, setApiData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDg0NjNhNTBiNzBjMjU5N2UyMjY0ZWViOTBiNTczNyIsIm5iZiI6MTczNDcxNjUwMi42NzM5OTk4LCJzdWIiOiI2NzY1YWM1NjhmMTBjMjc0NmI5MGRkYTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NP5GDnJp_PSESEUCsu48Q7Ni6oIAO3wuPgCKMArPEiw'
    }
  };
  
  
  const handleWheel = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  }


  useEffect(() => {
    
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardRef.current.addEventListener('wheel',handleWheel);
  },[]);
  
  return (
    <div className='titlecard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cardlist" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}  >
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="card" />
              <h3 id='title' >{card.original_title}</h3>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Titlecard