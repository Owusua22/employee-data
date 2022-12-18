import React, {useState} from 'react';
import { Form , Button} from "react-bootstrap";
import Employees from './Employees';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Add = () => {
   const[ name , setName] = useState("")

   const[ department, setDepartment] = useState("")
   const[ contact , setContact] = useState("")

   let history =useNavigate();
   
   const handleSubmit =(e) => {
    e.preventDefault();

    const ids = uuidv4();
    let uniqueId = ids.slice(0,5);
    
    let a = name,
    b = department,
    c = contact;

    Employees.push({id: uniqueId, Name: a , Department: b, Contact: c})

history ("/")

   }
   return (              
   <div>
    <Form style={{marginLeft:"650px",marginTop:"30px"}}>
    

      <Form.Group className="mb-3" controlId="formBasicName" style={{textAlign:"center" ,fontWeight:"bold", fontSize:"30px"}}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"  onChange={(e) => setName (e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDepartment" style={{textAlign:"center" ,fontWeight:"bold", fontSize:"30px"}}>
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Enter Department"  onChange={(e) => setDepartment (e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicContact" style={{textAlign:"center" ,fontWeight:"bold", fontSize:"30px"}}>
        <Form.Label>Contact</Form.Label>
        <Form.Control type="text" placeholder="Enter Contact"  onChange={(e) => setContact (e.target.value)}  />
      </Form.Group>
      
      <Button onClick={(e)=> handleSubmit(e)} variant="primary" type="submit" style={{marginLeft:"70px"}} >
        Submit
      </Button>
    
      </Form>
   </div>
   )
}

export default Add;
