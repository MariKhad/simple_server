const URL_GENDER = 'https://api.genderize.io';
const URL_NATIONALITY = 'https://api.nationalize.io';
const fetch = require('node-fetch')

module.exports.getGender = function (name) {
	return fetch(`${URL_GENDER}?name=${name}`)
		.then(response => {
			if (response.status === 404) {
				throw new Error('Запись не найдена');
			}
			return response.json();
		}).then(data => {
			return data.gender;
		}).catch((error) => {
			return error.message;
		})
}

module.exports.getNationality = function (name) {
	return fetch(`${URL_NATIONALITY}?name=${name}`)
		.then(response => {
			if (response.status === 404) {
				throw new Error('Запись не найдена');
			}
			return response.json();
		}).then(data => {
			return data.country[0].country_id;
		}).catch((error) => {
			return error.message;
		})
}