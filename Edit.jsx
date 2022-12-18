
import React, {useState, useEffect} from 'react';
import { Form , Button} from "react-bootstrap";
import Employees from './Employees';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";


const Edit = () => {
    const[ name , setName] = useState("")
    const[ id , setId] = useState("")


    const[ department, setDepartment] = useState("")
   const[ contact , setContact] = useState("")

   let history =useNavigate();
   let index = Employees.map(function(e){
    return e.id
}).indexOf(id);


const handleSubmit =(e) => {
    e.preventDefault();
    
    let a = Employees[index];
    a.Name = name;
    a.Department = department;
    a.Contact = contact;
    history ("/");
}
useEffect(() =>{
    setName(localStorage.getItem("Name"))
    setDepartment(localStorage.getItem("Department"))
    setContact(localStorage.getItem("Contact"))
    setId(localStorage.getItem("Id"))
},[])
   
    return (
        <div>
             <Form style={{marginLeft:"650px",marginTop:"30px"}}>
    

    <Form.Group className="mb-3" controlId="formBasicName" style={{textAlign:"center" ,fontWeight:"bold", fontSize:"30px"}}>
      <Form.Label >Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName (e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicDepartment" style={{textAlign:"center", fontWeight:"bold", fontSize:"30px"}}>
      <Form.Label>Department</Form.Label>
      <Form.Control type="text" placeholder="Enter Department"  value={department}  onChange={(e) => setDepartment (e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicContact" style={{textAlign:"center", fontWeight:"bold", fontSize:"30px"}}>
      <Form.Label>Contact</Form.Label>
      <Form.Control type="text" placeholder="Enter Contact"  value={contact} onChange={(e) => setContact (e.target.value)}  />
    </Form.Group>
    
    <Button onClick={(e)=> handleSubmit(e)} variant="primary" type="submit"  style={{marginLeft:"70px"}}>
      Update
    </Button>
  
    </Form>
        </div>
    );
}

export default Edit;
