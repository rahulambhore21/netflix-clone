import React, { useEffect } from 'react'
import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
function Player() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDg0NjNhNTBiNzBjMjU5N2UyMjY0ZWViOTBiNTczNyIsIm5iZiI6MTczNDcxNjUwMi42NzM5OTk4LCJzdWIiOiI2NzY1YWM1NjhmMTBjMjc0NmI5MGRkYTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NP5GDnJp_PSESEUCsu48Q7Ni6oIAO3wuPgCKMArPEiw'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[]);
  return (
    <div className='player'>
      <img src={backarrow} alt="" onClick={()=>navigate(-2)} />
      <iframe width='90%' height='90%' allowFullScreen title='trailer' src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0"></iframe>
      {/* <div className="info">
        <p>Title</p>
        <p>Year</p>
        <p>Duration</p>
      </div> */}
    </div>
  )
}

export default Player
