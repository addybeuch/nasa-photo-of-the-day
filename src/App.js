import React, {useState, useEffect} from "react";
import "./App.css";

import axios from 'axios';
import {BASE_URL, API_KEY} from './index'

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
    <div className="App">
      <h1>NASA APOD's</h1>
      <div>
        <h2>{date.title}</h2>
        <h2>{date.date}</h2>
        <p>{date.explanation}</p>
        <img src={date.url}/>

      </div>
    </div>
  );
}

export default App;
