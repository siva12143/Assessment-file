// important imports
import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './createemp';
import Edit from './edit';
import Empform from './homeemp';


function App() {
return (
	<div className='App'>

	<Router>
	<Routes>
		
		<Route path='/' element={<Empform/>}/>
		<Route path='/create' element={<Create/>}/>
		<Route path='/edit' element={<Edit/>}>
		</Route>	
	</Routes>
	</Router>
	
</div>
);

}

export default App;
