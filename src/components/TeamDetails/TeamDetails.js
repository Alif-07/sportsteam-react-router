import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MenuBar from '../MenuBar/MenuBar';
import './TeamDetails.css';
import male from '../../images/male.png';
import female from '../../images/female.png';

const TeamDetails = (props) => {
	const [details, setDetails] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
			.then((res) => res.json())
			.then((data) => setDetails(data?.teams[0]));
	}, []);
	return (
		<div className="details">
			<MenuBar></MenuBar>
			<div className="team-details">
				<div className="male-female">
					{details?.strGender === 'Male' ? (
						<img src={male} className="w-25" />
					) : (
						<img src={female} className="w-25" />
					)}
				</div>
				<div className="row d-flex flex-row">
					<div className="col-md-6">
						<div className="logo-img">
							<img src={details?.strTeamBadge} className="w-50 mb-4" />
						</div>
						<h2>{details?.strTeam}</h2>
						<p>{details?.strLeague}</p>
						<p>{details?.strCountry}</p>
					</div>
					<div className="col-md-6 py-5">{details?.strDescriptionEN}</div>
				</div>
			</div>
		</div>
	);
};

export default TeamDetails;
