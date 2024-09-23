import React, { useContext, useState } from 'react';
import UserContext from '../context/userContext';

const Login = () => {
	let [username, setUserName] = useState('');
	let [password, setPassword] = useState('');

	let { setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ username, password });
	};

	return (
		<div>
			<input
				type="text"
				value={username}
				onChange={(e) => setUserName(e.target.value)}
				placeholder="UserName"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default Login;
