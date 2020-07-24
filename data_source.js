const FILTER_SEASONAL = "Seasonal";
const FILTER_OFFERS = "Offers";
const FILTER_FOOD = "Food";
const FILTER_TUTION = "Tution";
const FILTER_OPENINGS = "New-Openings";

const SUPPORTED_FILTER = [
	FILTER_SEASONAL,
	FILTER_OFFERS,
	FILTER_FOOD,
	FILTER_TUTION,
	FILTER_OPENINGS
];

const CARD_MANGO = {
	title: "Alphanso mangoes available.",
	price: "Rs. 350/kg",
	creative: "Fresh from Jayprakash farm",
	time: "1h",
	img: ""
};
const CARD_LITCHI = {
	title: "Litchi from Muzaffarpur.",
	price: "Rs. 80/kg",
	creative: "Fresh from Bihar",
	time: "2h",
	img: ""
};
const CARD_SINGING_TUTION = {
	title: "Home tution for Music.",
	price: "",
	creative: "Studied from Juilliard School",
	time: "3h",
	img: ""
};
const CARD_NEW_RESTAURANT = {
	title: "Best Hakka noodle chef",
	price: "",
	creative: "New restaurat in town. 30% off offer going on. Come soon.",
	time: "5h",
	img: ""
};

function getSupportedFilters() {
	return SUPPORTED_FILTER;
}

function getFilteredCardsData(filter) {
	console.log(filter);
	switch (filter) {
		case FILTER_SEASONAL:
			return [CARD_MANGO, CARD_LITCHI];
		case FILTER_OFFERS:
			return [CARD_NEW_RESTAURANT];
		case FILTER_FOOD:
			return [CARD_NEW_RESTAURANT, CARD_MANGO, CARD_LITCHI];
		case FILTER_TUTION:
			return [CARD_SINGING_TUTION];
		case FILTER_OPENINGS:
			return [CARD_NEW_RESTAURANT];
		default:
			getAllCardsData()
	} 
}

function getSearchResults(query) {
	switch(query) {
		case "mango":
			return [CARD_MANGO];
		case "music":
			return [CARD_SINGING_TUTION];
		case "singing":
			return [CARD_SINGING_TUTION];
		default:
			return [];
	}
}

function getAllCardsData() {
	return [CARD_MANGO, CARD_LITCHI, CARD_SINGING_TUTION, CARD_NEW_RESTAURANT];
}