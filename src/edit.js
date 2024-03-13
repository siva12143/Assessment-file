import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Edit() {


	const [firstname, setFirstname] = useState('');
	const [secondname, setSecondname] = useState('');
	const [address, setaddress] = useState('');
	const [phonenumber, setPhonenumber] = useState('');
	const [email, setEmail] = useState('');
	const [dateofbirth, setDateofbirth] = useState('');
	const [id, setid] = useState('');


	let history = useNavigate()


	var index = Data.map(function (e) { return e.id; }).indexOf(id);


	const handelSubmit = (e) => {
		e.preventDefault();

		let a = Data[index]

		a.Firstname = firstname
		a.Secondname = secondname
		a.address = address
		a.Phonenumber = phonenumber
		a.Email = email
		a.Dateofbirth = dateofbirth

		history('/')
	}





	// Useeffect take care that page will be rendered only once
	useEffect(() => {
		setFirstname(localStorage.getItem('firstname'))
		setSecondname(localStorage.getItem('secondname'))
		setaddress(localStorage.getItem('address'))
		setPhonenumber(localStorage.getItem('phonenumber'))
		setEmail(localStorage.getItem('email'))
		setDateofbirth(localStorage.getItem('dataofbirth'))
		setid(localStorage.getItem('id'))
	}, [])


	return (
		<div className='editvalue'>
			<Form className="editTable d-flex flex-wrap gap-2">

				<h1>Edit User</h1>

				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Control value={firstname}
						onChange={e => setFirstname(e.target.value)}
						type="text" placeholder="Enter Name" />
				</Form.Group>


				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Control value={secondname}
						onChange={e => setSecondname(e.target.value)}
						type="text" placeholder="Enter name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicAddress">
					<Form.Control value={address}
						onChange={e => setaddress(e.target.value)}
						type="text" placeholder="address" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPhonenumber">
					<Form.Control value={email}
						onChange={e => setEmail(e.target.value)}
						type="text" placeholder="phonenumber" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formPhonenumber">
					<Form.Control value={phonenumber}
						onChange={e => setPhonenumber(e.target.value)}
						type="text" placeholder="phonenumber" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formPhonenumber">
					<Form.Control value={dateofbirth}
						onChange={e => setDateofbirth(e.target.value)}
						type="text" placeholder="phonenumber" />
				</Form.Group>


				<div className='edit_btns'>
					<Button className=''
						onClick={e => handelSubmit(e)}
						variant="primary" type="submit" size="lg">
						Update
					</Button>


					<Link className="d-grid gap-2" to='/'>
						<Button variant="warning" size="lg">Cancel</Button>
					</Link>
				</div>
			</Form>
		</div>
	)
}

export default Edit
