import React, { Component } from 'react';
import { buildRecipe } from './recipe-builder';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			recipe: {}
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
		this.setState({ name: '' });
		console.table(buildRecipe().ingredients);
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
											<input className='input is-large' name='name' placeholder='Enter your name...' type='text' onChange={this.changeName} value={this.state.name} />
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
			</div>
		);
	}
}

export default App;
