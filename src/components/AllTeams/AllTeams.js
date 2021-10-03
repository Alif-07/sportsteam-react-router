import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllTeams.css';

const AllTeams = () => {
	const [teams, setTeams] = useState([]);
	const [searchText, setSearchText] = useState('');
	useEffect(() => {
		fetch(
			`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
		)
			.then((res) => res.json())
			.then((data) => setTeams(data?.teams));
	}, [searchText]);
	const handleSearch = (e) => {
		setSearchText(e.target.value);
	};
	return (
		<div className="all-teams">
			<h1>Our team</h1>
			<div className="search-team">
				<input
					onChange={handleSearch}
					type="text"
					className="p-2"
					placeholder="Enter Team Name"
				/>
				<button className="btn btn-danger p-2">Search</button>
			</div>
			<div className="team">
				<div className="row">
					{teams?.map((team) => (
						<div className="col-md-4 my-2 p-2">
							<Card
								style={{ width: '18rem' }}
								className="d-flex flex-column justify-content-center align-items-center"
							>
								<Card.Img
									variant="top"
									className="w-75 mt-1"
									src={team?.strTeamBadge}
								/>
								<Card.Body>
									<Card.Title>{team?.strTeam}</Card.Title>
									<Card.Text>
										<p>{team?.strLeague}</p>
										<p>{team?.strCountry}</p>
										<p>{team?.strGender}</p>
									</Card.Text>
									<Link to={`./teamdetails/${team?.idTeam}`}>
										<button className="btn btn-success p-2">Details</button>
									</Link>
								</Card.Body>
							</Card>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllTeams;
