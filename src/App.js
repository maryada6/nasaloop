import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';

function App() {
  const [demo, setDemo]=useState(
    {
      
        "copyright": "Davide Necchi",
        "date": "2021-09-12",
        "explanation": "You  ds;kjgireuogore a fool",
        "hdurl": "https://apod.nasa.gov/apod/image/2109/AuroraIceland_Necchi_1280.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "A Spiral Aurora over Iceland",
        "url": "https://apod.nasa.gov/apod/image/2109/AuroraIceland_Necchi_960.jpg"
      
    }
  );

  const [loading,setLoading]=useState(false);
  const getInfo=()=>{
    setLoading(true);
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then((response) => {
    // console.log(response.data);
    setDemo(response.data);
    setLoading(false);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  });

 
}

useEffect(()=>{
  getInfo();
},[])

   if(!loading)
  return (
  
    <div className="App">
      <header className="App-header">
        <img src={demo.hdurl} style={{width:'500px'}} alt="" />
        <p>
        {demo.explanation}
        </p>
      </header>
    </div>
  );

  else
  return(<div>loading</div>)
}

export default App;
