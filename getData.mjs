const URL_GENDER = 'https://api.genderize.io';
const URL_NATIONALITY = 'https://api.nationalize.io';
import fetch from 'node-fetch';

export function getGender(name) {
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

export function getNationality(name) {
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