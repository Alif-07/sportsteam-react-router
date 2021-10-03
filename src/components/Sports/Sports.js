import React, { useContext } from 'react';
import { userContext } from '../../App';
import AllTeams from '../AllTeams/AllTeams';
import MenuBar from '../MenuBar/MenuBar';

const Sports = () => {
	const [user, setUser] = useContext(userContext);
	console.log(user);
	return (
		<div>
			<MenuBar></MenuBar>
			<AllTeams></AllTeams>
		</div>
	);
};

export default Sports;
