import React, { Fragment } from 'react';
import { Table , Button} from "react-bootstrap";
import Employees from './Employees';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate , Link} from "react-router-dom";

const Home = () => {
    let history = useNavigate()
   
    const handleEdit = (id , name,department, contact) =>{
        localStorage.setItem("Name" , name)
        localStorage.setItem("Id" , id)
        localStorage.setItem("Department" , department)
        localStorage.setItem("Contact" , contact)
    }
    const handleDelete = (id) =>{
        let index =Employees.map(function(e){
            return e.id
        }).indexOf(id)
        Employees.splice(index,1)
        history("./")
    }
    return (
        <Fragment>
        <div>

            <Table striped bordered hover size="sm" style={{marginLeft:"280px", marginTop:"40px", borderColor:"black"}}>
      <thead>
        <tr style={{color:"#d57777", textAlign:"center", fontWeight:"bold"}}>
          <th> STAFF ID</th>
          <th>NAME</th>
          <th>DEPARTMENT</th>
          <th>CONTACT NUMBER</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
    {
Employees && Employees.length > 0 ? 
Employees.map((item) =>{
    return(
        <tr style={{textAlign:"center"}}>
            <td>
                {item.id}
            </td>
            <td>
                {item.Name}
            </td>
            <td>
                {item.Department}
            </td>
            <td>
                {item.Contact}
            </td>

            <td>
                <Link to ={"/edit"}>
                
            <Button variant="info" onClick={() => handleEdit(item.id, item.Name, item.Department, item.Contact)} style={{marginRight:"20px", marginLeft:"20px"}}>Edit</Button>
            </Link>
            <Button variant="danger" onClick={() => handleDelete(item.id)} style={{marginRight:"10px"}}>Delete</Button>
            </td>
        </tr>
    )
})
:"No data available"

    }
      
      </tbody>
    </Table>
    <br />
    <Link to ="./add new employee">
    <Button variant="primary" size="lg" style={{marginLeft:"630px"}}>
          Add New Employee
        </Button>
        </Link>

        </div>

        </Fragment>
    )
}

export default Home;
