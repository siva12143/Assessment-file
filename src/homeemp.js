import React from "react";
import "./create.css";
import Data from "./data";
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

function Empform() {


  let history = useNavigate()

  function setID(id, Firstname, Secondname, address, Phonenumber, email, dataofbirth) {
    localStorage.setItem('id', id);
    localStorage.setItem('firstname', Firstname);
    localStorage.setItem('secondname', Secondname);
    localStorage.setItem('address', address);
    localStorage.setItem('phonenumber', Phonenumber);
    localStorage.setItem('email', email);
    localStorage.setItem('dataofbirth', dataofbirth);
  }


  function deleted(id) {

    var index = Data.map(function (e) { return e.id; }).indexOf(id);


    Data.splice(index, 1)

    history('/')
  }


  return (
    <div className="Users">
      <h1>User Details</h1>

      <div className="adduser py-2" >
        <Link className=" d-flex justify-content-end " to='/create'>
          <Button variant="warning" size="lg">Create</Button>
        </Link>
      </div>
      <Table striped bordered hover size="sm">

        <thead>
          <tr>
            <th>Firstname</th>
            <th>Secondname</th>
            <th>Address</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Data Of Birth</th>
            <th colSpan={2}>Action</th>
            
          </tr>
        </thead>
        <tbody>


          {Data.map((item) => {

            return (



              <tr>

                <td>{item.Firstname}</td>
                <td>{item.Secondname}</td>
                <td>{item.address}</td>
                <td>{item.Email}</td>
                <td>{item.Phonenumber}</td>
                <td>{item.Dateofbirth}</td>

                <td><Link to={`/edit`}><Button onClick={(e) =>
                  setID(item.id, item.Firstname, item.Secondname, item.address, item.Phonenumber, item.Email, item.Dateofbirth)} variant="info">
                  Edit</Button></Link></td>
                <td><Button onClick={e => deleted(item.id)}
                  variant="danger">Delete</Button></td>
              </tr>

            )
          })}

        </tbody>
      </Table>


      {/* Button for redirecting to create page for
   insertion of values */}

    </div>
  )
}


export default Empform
