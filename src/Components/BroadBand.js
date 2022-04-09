import React,{useState} from 'react'
import {Container,Button,Row,Col,Spinner,Alert,DropdownButton,Dropdown } from 'react-bootstrap';

import Axios from 'axios';
import PollOption from './PollOption';
import FileSaver from 'file-saver';
import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';

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
            state:state,
            gender:selectedOption
        })
        .then((res)=>{
            console.log(res);
            const data=res.data;
            setResponse(data);
            setIsLoader(false);
        })
        
        
      }

    const getAdd=()=>{
        let add="http://localhost:8080/exportToExcel";
        return axios({add,method:'GET',responseType:'blob'});
    };
    const downloadExcel=async ()=>{
        let add="http://localhost:8080/exportToExcel";
        setIsLoader(true);
        Axios.get({url:'http://localhost:8080/exportToExcel',responseType:'blob'})
        // getAdd()
        .then((response)=>{
            console.log(response);
            const data=response.data;
            // let url = window.URL.createObjectURL(new Blob([response.data]));
            // let a = document.createElement('a');
            // a.href = url;
            // const fileName = 'downloadHistory.xlsx';
            // a.setAttribute('download', fileName);
            // document.body.appendChild(a);
            // a.click();

            // const url = window.URL.createObjectURL(new Blob([response.data], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
            // const link = document.createElement("a");
            // link.href = url;
            // link.setAttribute("download",  "Data.xlsx");
            // document.body.appendChild(link);
            // link.click();

            var blob = new Blob([response.data], {type:'application/octet-stream'});
            console.log(blob);
            FileSaver.saveAs(blob, "excel.xlsx");

        //     const filename =  "Data.xlsx";
        // response.blob().then(blob => {
        //   let url = window.URL.createObjectURL(blob);
        //   let a = document.createElement('a');
        //   a.href = url;
        //   a.download = filename;
        //   a.click();
    //   });
        }).catch(error=>{
            console.log("ERROR");
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
                    <Button onClick={downloadExcel} className='btn btn-danger m-3'>Download</Button>
                    <a href="/@{/exportToExcel}">Export to Excel</a>
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
