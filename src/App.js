import React,{useEffect,useState} from 'react';
import { Row,Container,Col,Input,Button,InputGroup} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Axios from 'axios';


const App=()=> {
  const [response, setResponse] = useState("");
  const [query,setQuery]=useState('');

  const fetchDetails=async ()=>{
    const res=await Axios.get(`http://localhost:8080/home/${query}`);
    console.log(res);
    setResponse(res.data);
  }

  // useEffect(() => {
  //   fetchResponse();
  // }, []);
  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e=> setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
              <Button onClick={fetchDetails} color="primary">Fetch Data</Button>
          </InputGroup>
        </Col>
        <Col md="7">{response}</Col>
      </Row>
    </Container>
  );
}

export default App;
