import {useState} from 'react'
import './App.css'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'


function App() {
	

	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route
						path='*'
						element={<Navigate to='/SignUp' replace />}
					/>
					<Route path='/SignUp' element={<SignUp />} />
					<Route path='/Login' element={<Login/>} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
