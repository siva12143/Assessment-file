import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Create() {


	const [firstname, setFirstname] = useState('');
	const [secondname, setSecondname] = useState('');
	const [address, setaddress] = useState('');
	const [phonenumber, setPhonenumber] = useState('');
	const [email, setEmail] = useState('');
	const [dateofbirth, setDateofbirth] = useState('');


	// Using useNavigation for redirecting to pages
	let history = useNavigate();



	// Function for creating a post/entry
	const handelSubmit = (e) => {
		e.preventDefault();

		const ids = uuid() // Creating unique id
		let uni = ids.slice(0, 8)



		// Fetching a value from usestate and
		// pushing to javascript object
		let a = firstname;
		let b = secondname;
		let c = address;
		let d = phonenumber;
		let mail = email;
		let f = dateofbirth;
		Data.push({ id: uni, Firstname: a, Secondname: b, address: c, Phonenumber: d, Email : mail, Dateofbirth : f });




		// Redirecting to home page after creation done
		history('/')

	}

	return (
		<div className='form'>
			<Form className="d-flex flex-wrap gap-2" >
				<h1>Add User</h1>
				<Form.Group className="mb-3 width-50 d-inline-block" controlId="formBasicName">
					<Form.Control onChange={e => setFirstname(e.target.value)}
						type="text"
						placeholder="Enter Firstname" required />
				</Form.Group>

				<Form.Group className="mb-3 width-50 d-inline-block" controlId="formBasicName">
					<Form.Control onChange={e => setSecondname(e.target.value)}
						type="text"
						placeholder="Enter Secondname" required />
				</Form.Group>


				<Form.Group className="mb-3" controlId="formBasicAge">
					<Form.Control onChange={e => setaddress(e.target.value)}
						type="text"
						placeholder="Address" required />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicAge">
					<Form.Control onChange={e => setEmail(e.target.value)}
						type="text"
						placeholder="Email" required />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicAge">
					<Form.Control onChange={e => setPhonenumber(e.target.value)}
						type="text"
						placeholder="PhoneNumber" required />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicAge">
					<Form.Control onChange={e => setDateofbirth(e.target.value)}
						type="date"
						placeholder="PhoneNumber" required />
				</Form.Group>
				


				<Button className='w-80%'
					onClick={e => handelSubmit(e)}
					variant="primary" type="submit">
					ADD
				</Button>




			</Form>
		</div>
	)
}

export default Create
