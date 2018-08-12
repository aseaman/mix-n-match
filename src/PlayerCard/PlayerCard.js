import React, { Component } from 'react';
import './PlayerCard.css';

class PlayerCard extends Component {
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

	render() {
		return (
			<div className='column is-full-mobile is-half-tablet is-half-desktop'>
				<article className='card'>
					<header className='card-header'>
						<div className='card-header-title'>
							<p className='title is-4'>{this.props.name}</p>
							<p className='subtitle is-6 is-capitalized'>{this.props.recipe.title}</p>
						</div>
						<a className='card-header-icon'>
							<span className='icon'>
								<i className='fas fa-angle-down' />
							</span>
						</a>
					</header>
					<div className='card-content'>
						{this.props.recipe.ingredients.map(ingredient => {
							return (
								<div className='board-item' key={ `${this.props.ingredient}-${ingredient.ingredient}` }>
									<div className={this.getShadingClass(ingredient.amount)}>
										<span>{ingredient.ingredient}</span>
									</div>
								</div>
							);
						})}
					</div>
					<div className='card-footer'>
						<a className='is-danger card-footer-item' onClick={e => this.props.onDeleteCard(this.props.id, e)}>
							<span className='icon is-medium'>
								<i className='fas fa-skull'></i>
							</span>
							Sounds Gross!
							<span className='icon is-medium'>
								<i className='fas fa-skull'></i>
							</span>
						</a>
					</div>
				</article>
			</div>
		);
	}
}

export default PlayerCard;