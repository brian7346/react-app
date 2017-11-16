import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class AddMeetup extends Component{
	addMeetup(newMeetup){
		axios.request({
			method:'post',
			url: 'http://localhost:3000/api/meetups',
			data: newMeetup
		}).then(res => {
			this.props.history.push('/')
		})
		.catch(err=>console.log(err))
	}

	onSubmit(e){
		const newMeetup = {
			name: this.refs.name.value,
			city: this.refs.city.value,
			address: this.refs.address.value

		}
		this.addMeetup(newMeetup);
		e.preventDefault();
	}
	render(){
		return(
			<div>
				<br />
				<Link className="btn red" to="/">Назад</Link>
				<h1>Добавить встречу</h1>
				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input type="text" name="name" ref="name"/>
						<label htmlFor="name">Название</label>
					</div>
					<div className="input-field">
						<input type="text" name="city" ref="city"/>
						<label htmlFor="city">Город</label>
					</div>
					<div className="input-field">
						<input type="text" name="address" ref="address"/>
						<label htmlFor="address">Адрес</label>
					</div>
					<input type="submit" value="Сохранить" className="btn grey"/>
				</form>
			</div>
		)
	}
}
