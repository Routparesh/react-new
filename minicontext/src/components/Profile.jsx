import React, { useContext } from 'react';
import UserContext from '../context/userContext';

const Profile = () => {
	let { user } = useContext(UserContext);

	if (!user) return <h1>Not Log In</h1>;
	return (
		<div>
			<h1>Profile:{user.username}</h1>
		</div>
	);
};

export default Profile;