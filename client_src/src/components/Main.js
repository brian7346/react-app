import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MeetupsDetails from './MeetupDetails'
import Meetups from './Meetups';
import About from './About';
import EditMeetup from './EditMeetup';
import AddMeetup from './AddMeetup';

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Meetups} />
			<Route exact path="/about" component={About} />
			<Route exact path="/meetups/add" component={AddMeetup} />
			<Route exact path="/meetups/edit/:id" component={EditMeetup} />
			<Route exact path="/meetups/:id" component={MeetupsDetails} />
		</Switch>
	</main>
)

export default Main;