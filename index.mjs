import { getGender, getNationality } from './getData.mjs';
import http from 'http'; // встроенный модуль http 
const server = http.createServer().listen(3001); // создание сервера, порт 3000


server.on('request', async (req, res) => { // подписка на входящий запрос 
	let result = '';
	switch (req.url) {
		case '/':
			result = ' Server is running \n You can use "get", "post" or name queries in url \n Let\'s try!!';
			break;
		case '/post':
			result = 'Server is receiving your informaiton';
			break;
		case '/get':
			result = 'Server is sending you informaiton';
			break;
		default:
			let firstName = req.url.trim().slice(1).toLowerCase();
			let firstNameUpper = firstName.charAt(0).toUpperCase() + firstName.slice(1);
			let gender = await getGender(firstName);
			let nationality = await getNationality(firstName);
			if (gender) {
				result = `${firstNameUpper} is ${gender} from ${nationality}`;
			} else result = 'The name is not found, try another one';
			break;
	}
	return res.end(result);
});