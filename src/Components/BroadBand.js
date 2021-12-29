import React,{useState} from 'react'
import {Container,Button,Row,Col,Spinner,Alert,DropdownButton,Dropdown } from 'react-bootstrap';

import Axios from 'axios';
import PollOption from './PollOption';


const BroadBand=(model)=> {
    const [response, setResponse] = useState("");
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [isLoader,setIsLoader]=useState(false);
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const BASE_URL="http://localhost:8080/saveDetails";

    const [selectedOption, setSelectedOption] = useState('');
    console.log(model.model.question);
    const fetchDetails=async ()=>{
        setIsLoader(true);
        Axios.post(BASE_URL,{
            first:firstName,
            last:lastName,
            country:country,
            state:state
        })
        .then((res)=>{
            console.log(res);
            const data=res.data;
            setResponse(data);
            setIsLoader(false);
        })
        
        
      }

    return (
        <Container fluid>
            <Row className="justify-content-md-center ">
                <Col sm={12} md={4} lg={4}>
                    <label>First Name: </label>
                    <input className="form-control" type="text" id="firstName" value={firstName} placeholder='Enter First Name' 
                    onChange={e=> setFirstName(e.target.value)}/>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <label>Last Name: </label>
                    <input className="form-control" type="text" id="lastName" value={lastName} placeholder='Enter Last Name' 
                    onChange={e=> setLastName(e.target.value)}/>
                </Col>
            </Row>
            <Row className="justify-content-md-center ">
                <Col sm={12} md={4} lg={4}>
                    <label>Country: </label>
                    <select id='country' value={country} onChange={e=>{setCountry(e.target.value)}} 
                    className="form-control" aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="INDIA">India</option>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                    </select>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <label>State: </label>
                    <select id='state' value={state} onChange={e=>{setState(e.target.value)}}
                     className="form-control" aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="MAHARASHTRA">Maharashtra</option>
                        <option value="DELHI">Delhi</option>
                        <option value="UP">UP</option>
                    </select>
                </Col>
            </Row>
            <Row className="justify-content-md-center ">
                <Col sm={12} md={4} lg={4}>
                    {/* <label>Gender: </label>
                    <input type="radio" id="male" name='gender'/>Male
                    <input type="radio" id="female" name='gender'/>Female */}
                    <div className="poll">
                        {model.model.question}
                        <PollOption
                        options={model.model.choices}
                        onChange={e=> setSelectedOption(e.target.value)}
                        selected={selectedOption} />
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <label>Occupation: </label>
                    <input type="checkbox" id="student" name='occupation'/>Student
                    <input type="checkbox" id="service" name='occupation'/>Service
                    <input type="checkbox" id="buisness" name='occupation'/>Buisness
                    
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm={12} md={2} lg={2}>
                    {isLoader ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> : null}
                    <Button onClick={fetchDetails} className='btn btn-primary m-3'>Submit</Button>
                    <Button className='btn btn-danger m-3'>Cancel</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                {response.first}
                </Col>
            </Row>
        </Container>
    )
}

export default BroadBand; 
