import React, { Component } from 'react';
import './PlayerCard.css';

class PlayerCard extends Component {
	constructor() {
		super();
		this.state = {
			expandCard: true
		}

		this.onToggleAccordion = this.onToggleAccordion.bind(this);
	}

	getShadingClass(ratio) {
		let shadingClass = '';
		switch (ratio) {
			case 1:
				shadingClass = 'shading-full';
				break;
			case 0.5:
				shadingClass = 'shading-half';
				break;
			case 0.33:
				shadingClass = 'shading-third';
				break;
			case 0.25:
				shadingClass = 'shading-quarter';
				break;
			case 0.2:
				shadingClass = 'shading-twentieth'
				break;
			default:
				break;
		}
		return `board-item-content ${shadingClass}`
	}

	onIngredientClick(event) {
		if (this.props.locked) {
			return;
		}

		const ingredient = event.target.dataset.ingredient;
		event.target.innerText = ingredient;
	}

	onToggleAccordion() {
		const expandedState = this.state.expandCard;
		this.setState({
			expandCard: !expandedState
		});
	}

	render() {
		return (
			<div className='column is-full-mobile is-half-tablet is-quarter-desktop'>
				<article className='card'>
					<header className='card-header'>
						<div className='card-header-title card-titles'>
							<p className='title is-4'>{this.props.name}</p>
							<p className='subtitle is-5 is-capitalized'>
								<span className='icon is-medium is-right'>
									<i className='fas fa-cocktail'></i>
								</span>
								{this.props.recipe.title}
								<span className='icon is-medium is-right'>
									<i className='fas fa-cocktail'></i>
								</span>
							</p>
						</div>
						<a className='card-header-icon' onClick={() => this.onToggleAccordion()}>
							<span className='icon'>
								<i className={this.state.expandCard ? 'fas fa-angle-down' : 'fas fa-angle-right'}/>
							</span>
						</a>
					</header>
					{this.state.expandCard &&
						<div>
							<div className='card-content'>
								{this.props.recipe.ingredients.map(ingredient => {
									return (
										<div className='board-item' key={ `${this.props.ingredient}-${ingredient.ingredient}` }>
											<div className={this.getShadingClass(ingredient.amount)} data-ingredient={ingredient.ingredient} onClick={e => { this.onIngredientClick(e) }}>
												{this.props.solved &&
													<span>
														<i className={ingredient.correct ? 'fas fa-check correct-icon' : 'fas fa-times wrong-icon'}></i> {ingredient.ingredient}
													</span>
												}
											</div>
										</div>
									);
								})}
							</div>
							<div className='card-footer'>
								<span className="card-footer-item">
									{this.props.solvedTotal} of {this.props.recipe.ingredients.length} <i className="fas fa-check correct-icon"></i>
								</span>
								<a className='footer-delete card-footer-item' onClick={e => this.props.onDeleteCard(this.props.id, e)}>
									<span className='icon is-medium'>
										<i className='fas fa-skull'></i>
									</span>
									Sounds Gross!
									<span className='icon is-medium'>
										<i className='fas fa-skull'></i>
									</span>
								</a>
							</div>
						</div>
					}
				</article>
			</div>
		);
	}
}

export default PlayerCard;