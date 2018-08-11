import { getHipsterTitle } from './hipster';

export function buildRecipe() {
	const recipe = {
		ingredients: [].concat(getBaseSpirits(), getMixers()),
		title: getHipsterTitle(),
	}
	return recipe;
}

function getBaseSpirits() {
	const availableSpirits = [
		'Bourbon',
		'Gin',
		'Rum',
		'Tequila',
		'Vodka'
	];

	const randomSpirts = getRandomElementsFromArray({
		array: availableSpirits,
		min: 1,
		max: 2
	});
	const spritsWithRatios = [];

	if (randomSpirts.length === 1) {
		spritsWithRatios.push({
			amount: 1,
			ingredient: randomSpirts[0]
		});
	} else {
		spritsWithRatios.push({
			amount: 0.5,
			ingredient: randomSpirts[0]
		});
		spritsWithRatios.push({
			amount: 0.5,
			ingredient: randomSpirts[1]
		});
	}

	return spritsWithRatios;
}

function getMixers() {
	const mixers = [
		'Apricot',
		'Campari',
		'Cherry Heering',
		'Ginger',
		'Lemon',
		'Lime',
		'Maraschino',
		'Peach',
		'Simple Syrup'
	];

	const randomMixers = getRandomElementsFromArray({
		array: mixers,
		min: 2,
		max: 5
	});
	const mixersWithRatios = [];
	let ratio = 1 / randomMixers.length;
	ratio = parseFloat(ratio.toFixed(2));

	randomMixers.forEach(function(mixer) {
		mixersWithRatios.push({
			amount: ratio,
			ingredient: mixer
		})
	})

	return mixersWithRatios;
}

function getRandomIntegerInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElementsFromArray({ array, min, max }) {
	const numberOfItems = getRandomIntegerInclusive(min, max);
	const itemsToUse = [];

	if (numberOfItems === 0) {
		return itemsToUse;
	}

	for (let index = 0; index < numberOfItems; index++) {
		const randomIndex = Math.floor(Math.random() * array.length);
		const item = array[randomIndex];
		itemsToUse.push(item);
		array.splice(randomIndex, 1);
	}

	return itemsToUse;
}