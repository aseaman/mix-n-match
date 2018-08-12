import React, { Component } from 'react';
import { buildRecipe } from './recipe-builder';
import PlayerCard from './PlayerCard/PlayerCard';
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
		this.setState({
			name: '',
			players: this.state.players.concat([player])
		});
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
								key={index}
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
