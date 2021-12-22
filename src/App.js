import React,{useEffect,useState} from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Axios from 'axios';


const App=()=> {
  const [response, setResponse] = useState("");
  const fetchResponse=async ()=>{
    const res=await Axios.get('http://localhost:8080/home');
    console.log(res);
    setResponse(res.data);
  }

  useEffect(() => {
    fetchResponse();
  }, [])
  return (
    <div className="App">
      <span>{response}</span>
    </div>
  );
}

export default App;
