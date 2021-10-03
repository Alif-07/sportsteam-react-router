import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Sports from './components/Sports/Sports';
import Error from './components/Error/Error';
import { createContext, useState } from 'react';

export const userContext = createContext();

function App() {
	const [user, setUser] = useState({
		name: 'Alif',
	});
	return (
		<div>
			<userContext.Provider value={[user, setUser]}>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route exact path="/home">
							<Home></Home>
						</Route>
						<Route path="/teamdetails/:id">
							<TeamDetails></TeamDetails>
						</Route>
						<Route exact path="/sports">
							<Sports></Sports>
						</Route>
						<Route path="*">
							<Error></Error>
						</Route>
					</Switch>
				</Router>
			</userContext.Provider>
		</div>
	);
}

export default App;
