const prompt = require('prompt');


prompt.start();

const data = {
	properties: {
		name: {
			required: true,
			message: "Ingresr un nombre",
		}
	}	
}

const getString = (value) => {

	const result  = {
		fisrtTwoLetters: value.substring(0,2),
		fisrtThreeLetters: value.substring(0,3),
		lastTwoLetters: value.substring(value.length-2,value.length), //value.length>2?value.substring(value.length-2,value.length): '',
		lastLetters: value.substring(value.length-1,value.length),
	}
	return result;
}
prompt.get(
	data,
	(err, result) => {
		if (err) {
			console.log(err);
			return false;
		}
		const outData = getString(result.name);
		console.log('Mostrar sus dos primeras letras: ',outData.fisrtTwoLetters);
		console.log('Mostrar sus tres primeras letras: ',outData.fisrtThreeLetters);
		console.log('Mostrar sus últimas dos letras: ',outData.lastTwoLetters);
		console.log('Mostrar su última letra: ',outData.lastLetters);
	}
)