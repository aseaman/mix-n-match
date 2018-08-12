import React, { Component } from 'react';
import { buildRecipe } from './recipe-builder';
import PlayerCard from './PlayerCard/PlayerCard';
import firebase from './firebase';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			players: []
		}
		this.changeName = this.changeName.bind(this);
		this.createRecipe = this.createRecipe.bind(this);
		this.onDeleteCard = this.onDeleteCard.bind(this);
	}

	changeName(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	createRecipe() {
		if (this.state.name === '') {
			return;
		}

		const player = {
			locked: true,
			name: this.state.name,
			recipe: buildRecipe()
		};

		const playersRef = firebase.database().ref('players');
		playersRef.push(player);
		this.setState({ name: '' });
	}

	onDeleteCard(id) {
		const playerRef = firebase.database().ref(`/players/${id}`);
		if (playerRef) {
			playerRef.remove();
		}
	}

	componentDidMount() {
		const playersRef = firebase.database().ref('players');
		playersRef.on('value', snapshot => {
			let players = snapshot.val();
			let newState = [];
			for (let playerId in players) {
				newState.push({
					id: playerId,
					locked: players[playerId].locked,
					name: players[playerId].name,
					recipe: players[playerId].recipe
				});
			}

			this.setState({
				players: newState
			})
		})
	}

	render() {
		return (
			<div className='app'>
				<nav className='navbar has-shadow'>
					<div className='navbar-brand'>
						<span className='navbar-item'>Cool Logo Here</span>
					</div>
				</nav>
				<section className='hero is-info'>
					<div className='hero-body'>
						<div className='container'>
							<div className='card'>
								<div className='card-content'>
									<div className='field has-addons'>
										<div className='control has-icons-right is-expanded'>
											<input className='input is-large' name='name' placeholder='Who dis?' type='text' onChange={this.changeName} value={this.state.name} />
												<span className='icon is-medium is-right'>
													<i className='fas fa-user-circle'></i>
												</span>
										</div>
										<div className='control'>
											<button type='button' className='button is-info is-large' onClick={this.createRecipe}>Add Me</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='container'>
					<div className='columns is-desktop is-centered'>
						{this.state.players.map((player, index) => {
							return (<PlayerCard
								id={player.id}
								key={index}
								onDeleteCard={this.onDeleteCard}
								name={player.name}
								recipe={player.recipe}
							/>)
						})}
					</div>
				</section>
			</div>
		);
	}
}

export default App;
