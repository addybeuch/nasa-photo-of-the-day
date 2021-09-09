import React, {useState, useEffect} from "react";
import "./App.css";

import axios from 'axios';
import {BASE_URL, API_KEY} from './index'
import styled from 'styled-components'


const StyledDetails = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  background-color: #fffb96;
  width: 80%;
  img {
    width: 80%;
    border: solid 12px #05ffa1;
    padding: 12px;
  }
  h1 {
    color: #ff71ce;
    font-size: 2.8rem;
  }
  h2 {
    color: #b967ff;
  }
  p {
    color: #01cdfe;
    font-weight: bold;
    margin-left: 20%;
    margin-right: 20%;
  }
`

function App() {
  const [date, setDate] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      setDate(res.data);
    }).catch(err => console.error(err));
  }, [])

  return (
    <StyledDetails>
    <div className="App">
      <h1>NASA APOD's</h1>
      <div>
        <h2>{date.title}</h2>
        <h2>{date.date}</h2>
        <p>{date.explanation}</p>
        <img src={date.url}/>

      </div>
    </div>
    </StyledDetails>
  );
}

export default App;
